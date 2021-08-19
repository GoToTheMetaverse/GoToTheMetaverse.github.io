/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// import 링크 출처: https://github.com/replit/kaboom
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

// no log
// console.log = function () { }

// noscroll
document.body.style.overflow = 'hidden';

// 메세지 교환
window.addEventListener("message", function (event) {
    if (event.data.cmd === undefined) return;
    var recv = event.data;
    // console.log('kbEditPic recv', recv);

    if (recv.cmd == 'kbEditPic.firstData') {
        g.tiles = recv.tiles;
        k.go("game");
        // console.log('start game scene');
    } else if (recv.cmd == 'kbEditPic.saveComplete') {
        g.saving = false;
        g.uiSave.color.a = A_ENABLE;
    } else {
        console.error('kbEditPic recv unknown', recv);
        return;
    }
});

// 보내기
function postMessage(data) {
    // console.log('kbEditPic send', data);
    window.parent.postMessage(data, '*');
}


function effectChecker(sx, sy) {
    let x2 = sx;
    let y2 = sy;
    let x = 0;
    let y = 0;
    return {
        update() {
            x += k.dt() * 3;
            y -= k.dt() * 3;
            if (x > 256) {
                x -= 256;
            }
            if (y < -256) {
                y += 256;
            }

            this.pos.x = x2 + x;
            this.pos.y = y2 + y;
        }
    }
}

// 컴포넌트 k.dt() 로 시간 업데이트 가능
function effectFadeBigHide() {
    let lifeMax = 0.3;
    let life = lifeMax;
    return {
        update() {
            life -= k.dt();
            if (life < 0) {
                k.destroy(this);
                return;
            }

            let r = (lifeMax - life) / lifeMax;
            let r2 = r * r;
            let ri = 1 - r;
            this.scale = 1 + r2;
            this.color.a = ri;
            // console.log('eff', r);
        }
    }
}

// 모이면서 보이게됨
function effectFadeSmallShow() {
    let lifeMax = 0.3;
    let life = lifeMax;
    return {
        update() {
            life -= k.dt();
            if (life < 0) {
                k.destroy(this);
                return;
            }

            let r = (lifeMax - life) / lifeMax;
            let r2 = r * r;
            let ri = 1 - r;
            let r2i = 1 - r2;
            this.scale = 1 + r2i;
            this.color.a = r;
            // console.log('eff', r);
        }
    }
}

function getIndex(x, y) {
    return Math.floor(y * UNIT + x);
}

function color255(r, g, b) {
    let c = k.color(r / 255, g / 255, b / 255, 1);
    return c;
}

function makeInfo(obj) {
    obj.cx = obj.x + obj.w / 2;
    obj.cy = obj.y + obj.h / 2;
    obj.ex = obj.x + obj.w;
    obj.ey = obj.y + obj.h;
    return obj;
}

function checkClick(mp, obj) {
    if (mp.x < obj.x || mp.y < obj.y) {
        return false;
    }
    if (mp.x > obj.ex || mp.y > obj.ey) {
        return false;
    }
    return true;
}


// 폭 높이중에 한쪽으로 꽉차도록 scale 구함
const MODE_MAKE_BG = false;
const UNIT = 16; // 16 x 16 이미지 제작툴
const W = (UNIT + 5) * UNIT; // 336
const H = (UNIT + 2) * UNIT; // 288
const A_DISABLE = 0.25;
const A_ENABLE = 1;
// console.log('W', W, 'H', H);

let scale = 1;
// if (!MODE_MAKE_BG) 
{
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rw = w / W;
    // const rh = h / H;
    // scale = (rw < rh) ? rw : rh;
    scale = rw;
}

const k = kaboom({
    global: false,
    fullscreen: false,
    width: W,
    height: H,
    scale: scale,
    debug: true,
    clearColor: [0.25, 0.25, 0.25, 1],
});

// ASSET LOAD
const SOUND_ERR = 'SOUND_ERR';
const SOUND_SAVE = 'SOUND_SAVE';
const SOUND_CLICK = 'SOUND_CLICK';

// GAME CODE START
k.loadSprite("bg", "res/bg16.png");
k.loadSprite("null_color", "res/null_color.png");
k.loadSprite('checker', 'res/checker2.png');
k.loadSound(SOUND_SAVE, "res/FA_Confirm_Button_1_4.wav");
k.loadSound(SOUND_ERR, "res/FA_Select_Button_1_1.wav");
k.loadSound(SOUND_CLICK, "res/LQ_Click_Button.wav");




let pic;
let url;
let loginToken;
let userUid;
let curEditPic;

// CONST COLOR
const carr = [
    /* 0 */ { hex: 0x000000, name: 'null' },
    /* 1 */ { hex: 0x000000, name: 'Black' },
    /* 2 */ { hex: 0x9e9e9e, name: 'Grey' },
    /* 3 */ { hex: 0x795548, name: 'Brown' },
    /* 4 */ { hex: 0xff1c1c, name: 'Red' },
    /* 5 */ { hex: 0xffff00, name: 'Yellow' },
    /* 6 */ { hex: 0x1cff1c, name: 'Green' },
    /* 7 */ { hex: 0x1c1cff, name: 'Blue' },

    /* 8 */ { hex: 0xffffff, name: 'White' },
    /* 9 */ { hex: 0xd3d3d3, name: 'grey Light' },
    /* a */ { hex: 0xc0c0c0, name: 'silver' },
    /* b */ { hex: 0xb5651d, name: 'brown light' },
    /* c */ { hex: 0xFF7F7F, name: 'red light' },
    /* d */ { hex: 0xFFFF99, name: 'yellow light' },
    /* e */ { hex: 0x32CD32, name: 'lime green' },
    /* f */ { hex: 0xADD8E6, name: 'Blue light' },
];

const colors = [];
for (let i = 0; i < carr.length; i++) {
    const c = carr[i];
    let h = c.hex.toString(16);
    if (i == 0 || i == 1) {
        h = '000000';
    }
    const r = h.substring(0, 2);
    const g = h.substring(2, 4);
    const b = h.substring(4, 6);
    carr[i].rgb = [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
    ];
    colors.push(color255(
        carr[i].rgb[0],
        carr[i].rgb[1],
        carr[i].rgb[2],
    ))
}


const colorBlack = colors[1];
const colorWhite = colors[8];
const colorGray = colors[2];
const colorRed = colors[3];


// CONST VALUE
const btninfoMinimap = makeInfo({ x: UNIT * 18, y: UNIT, w: UNIT * 2, h: UNIT * 2 });
const btninfoColor = makeInfo({ x: UNIT * 18, y: UNIT * 4, w: UNIT * 2, h: UNIT * 8 });
const btninfoSave = makeInfo({ x: UNIT * 18 - 2, y: UNIT * 13, w: UNIT * 2 + 4, h: UNIT });
const btninfoUndo = makeInfo({ x: UNIT * 18 - 2, y: UNIT * 15, w: UNIT * 2 + 4, h: UNIT });
const btninfoTile = makeInfo({ x: UNIT, y: UNIT, w: UNIT * UNIT, h: UNIT * UNIT });

for (let i = 0; i < colors.length; i++) {
    const x = Math.floor(i / 8);
    const y = i % 8;
    const px = btninfoColor.x + x * UNIT;
    const py = btninfoColor.y + y * UNIT;
    carr[i].i = i;
    carr[i].x = px;
    carr[i].y = py;
}

// GLOBAL OBJECT
const g = {
    curColorNo: 8,
    historyAction: [],
    colorPickPosX: (i) => {
        const x = Math.floor(i / 8);
        const ret = btninfoColor.x + x * UNIT;
        // console.log('colorPickPosX', i, x, ret, btninfoColor.x);
        return ret;
    },
    colorPickPosY: (i) => {
        const y = i % 8;
        const ret = btninfoColor.y + y * UNIT;
        // console.log('colorPickPosY', i, y, ret, btninfoColor.y);
        return ret;
    },
    updateSelectedColorUI: () => {
        const i = g.curColorNo;
        const x = Math.floor(i / 8);
        const y = i % 8;
        const px = btninfoColor.x + x * UNIT + 10;
        const py = btninfoColor.y + y * UNIT + 10;
        // console.log('updateSelectedColorUI', x, y);
        g.uiSelectedColorShadow.pos = k.vec2(px, py);
        g.uiSelectedColor.pos = k.vec2(px - 2, py - 2);
    },
    /// 점점 커지면서 사라짐
    effectFadeBig: (x, y, w, h, c) => {
        // console.log('effect', x, y, w, h, c);
        const effect = k.add([
            k.rect(w, h),
            k.color(c.r, c.g, c.b, c.a),
            k.layer("effect"),
            k.pos(x, y),
            k.origin("center"),
            effectFadeBigHide(),
        ]);
    },
    // 줄어들면서 보이게됨 (사라지는거 아님)
    effectFadeSmall: (x, y, w, h, c) => {
        // console.log('effect', x, y, w, h, c);
        const effect = k.add([
            k.rect(w, h),
            k.color(c.r, c.g, c.b, c.a),
            k.layer("effect"),
            k.pos(x, y),
            k.origin("center"),
            effectFadeSmallShow(),
        ]);
    },
    play(id) {
        k.play(id, k.volume(0.3));
    }
};


postMessage({
    cmd: 'kbEditPic.frameSize',
    w: Math.floor(W * scale),
    h: Math.floor(H * scale),
});


function procUndo() {
    if (g.historyAction.length < 1) {
        console.log('procUndo, no history');
        g.play(SOUND_ERR);
        return;
    }

    console.log('procUndo success');
    g.play(SOUND_CLICK);
    g.effectFadeBig(
        btninfoUndo.cx,
        btninfoUndo.cy,
        btninfoUndo.w,
        btninfoUndo.h,
        colorWhite.color
    );

    const data = g.historyAction.pop();
    if (g.historyAction.length < 1) {
        g.uiUndo.color.a = A_DISABLE;
    }

    if (data.type == 'drag') {
        data.list.forEach((t) => {
            const tx = t.x;
            const ty = t.y;
            const index = getIndex(tx, ty);
            const old = g.tiles[index];
            g.tiles[index] = t.c;

            if (old > 0) {
                g.effectFadeBig(
                    btninfoTile.x + tx * 15 + 7.5,
                    btninfoTile.y + ty * 15 + 7.5,
                    15,
                    15,
                    colors[old].color
                );
            }
        });
    }
    else {
        console.error('procUndo unknown type', data.type);
    }
}

k.scene("game", () => {

    k.layers(["bg", "obj", "ui", "effect"], "obj");


    for (let i = 0; i < 3; i++) {
        // 첫번째 줄
        k.add([
            k.sprite('checker'),
            k.pos(0, 0),
            k.layer("bg"),
            k.origin("topleft"),
            colorGray,
            effectChecker(-256 + i * 256, 0),
        ]);
        // 두번째줄
        k.add([
            k.sprite('checker'),
            k.pos(0, 0),
            k.layer("bg"),
            k.origin("topleft"),
            colorGray,
            effectChecker(-256 + i * 256, 256),
        ]);
        // 세번째줄
        if (i < 2) {
            k.add([
                k.sprite('checker'),
                k.pos(0, 0),
                k.layer("bg"),
                k.origin("topleft"),
                colorGray,
                effectChecker(-256 + i * 256, 512),
            ]);
        }
    }

    g.bg = k.add([
        k.sprite('bg'),
        k.pos(0, 0),
        k.layer("bg"),
        k.origin("topleft"),
    ]);


    k.add([
        k.sprite('null_color'),
        k.pos(carr[0].x, carr[0].y),
        k.layer("ui"),
        k.origin("topleft"),
    ]);

    for (let i = 1; i < colors.length; i++) {
        k.add([
            k.pos(carr[i].x, carr[i].y),
            k.rect(UNIT, UNIT),
            k.layer("ui"),
            k.origin("topleft"),
            colors[i],
        ]);
    }


    g.uiMinimapBG = k.add([
        k.rect(btninfoMinimap.w, btninfoMinimap.h),
        k.pos(btninfoMinimap.x, btninfoMinimap.y),
        k.layer("ui"),
        k.origin("topleft"),
        colorGray,
    ]);


    g.uiSaveBG = k.add([
        k.rect(btninfoSave.w, btninfoSave.h),
        k.pos(btninfoSave.x, btninfoSave.y),
        k.layer("ui"),
        k.origin("topleft"),
        colorGray,
    ]);
    g.uiSave = k.add([
        k.text("SAVE"),
        k.pos(btninfoSave.cx, btninfoSave.cy),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
    ]);


    g.uiUndoBG = k.add([
        k.rect(btninfoUndo.w, btninfoUndo.h),
        k.pos(btninfoSave.x, btninfoUndo.y),
        k.layer("ui"),
        k.origin("topleft"),
        colorGray,
    ]);
    g.uiUndo = k.add([
        k.text("UNDO"),
        k.pos(btninfoUndo.cx, btninfoUndo.cy),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
    ]);
    g.uiUndo.color.a = A_DISABLE;

    g.uiSelectedColorShadow = k.add([
        k.rect(6, 6),
        k.rect(6, 6),
        k.layer("ui"),
        k.origin("center"),
        k.color(0, 0, 0, 0.5),
    ]);

    g.uiSelectedColor = k.add([
        k.rect(6, 6),
        k.rect(6, 6),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 0.5),
    ]);

    g.updateSelectedColorUI();

    k.render(() => {
        let i, x, y;
        for (i = 0; i < g.tiles.length; i++) {
            if (g.tiles[i] == 0)
                continue;
            const x = i % UNIT;
            const y = Math.floor(i / UNIT);
            const cindex = g.tiles[i];
            k.drawRect(
                k.vec2(
                    btninfoTile.x + x * UNIT,
                    btninfoTile.y + y * UNIT
                ),
                UNIT,
                UNIT,
                colors[cindex]
            );
            k.drawRect(
                k.vec2(
                    btninfoMinimap.x + x * 2,
                    btninfoMinimap.y + y * 2
                ),
                2,
                2,
                colors[cindex]
            );
        }

        for (i = 0; i <= UNIT; i++) {
            x = btninfoTile.x;
            y = btninfoTile.y + i * UNIT;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x + UNIT * UNIT, y),
                colorWhite
            );

            x = btninfoTile.x + i * UNIT;
            y = btninfoTile.y;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x, y + UNIT * UNIT),
                colorWhite
            );
        }
    });

    g.isDrag = false;
    g.historyDrag = [];
    g.tx = -1;
    g.ty = -1;

    k.mouseDown(() => {
        g.isDrag = true;

        var mp = k.mousePos();
        if (checkClick(mp, btninfoTile)) {
            const tx = Math.ceil((mp.x - UNIT) / UNIT) - 1;
            const ty = Math.ceil((mp.y - UNIT) / UNIT) - 1;
            if (tx === g.tx && ty == g.ty) {
                return;
            }
            g.tx = tx;
            g.ty = ty;
            // console.log('mouseDown', g.tx, g.ty);

            if (tx >= 0 && ty >= 0 && tx < UNIT && ty < UNIT) {
                const index = getIndex(tx, ty);
                const old = g.tiles[index];
                if (old == g.curColorNo) {
                    // console.log('click tile skip same color');
                    return;
                }

                // console.log('g.tiles', g.tiles);
                // console.log('set tile', index, tx, ty, g.curColorNo, '<-', old);

                g.tiles[index] = g.curColorNo;
                g.uiUndo.color.a = A_ENABLE;
                // g.historyAction.push({ x: tx, y: ty, c: old });
                g.historyDrag.push({ x: tx, y: ty, c: old });

                g.play(SOUND_CLICK);
                g.effectFadeBig(
                    btninfoTile.x + (tx + 0.5) * UNIT,
                    btninfoTile.y + (ty + 0.5) * UNIT,
                    UNIT,
                    UNIT,
                    colors[g.curColorNo].color
                );
            }
        }
    });

    k.mouseRelease(() => {
        g.isDrag = false;
        if (g.historyDrag.length > 0) {
            g.historyAction.push({
                type: 'drag',
                list: g.historyDrag,
            });
            g.historyDrag = [];
        }
    });

    k.mouseClick(() => {
        var mp = k.mousePos();
        var mx = mp.x;
        var my = mp.y;
        /*
        if (checkClick(mp, btninfoTile)) {
            const tx = Math.ceil((mx - UNIT) / UNIT) - 1;
            const ty = Math.ceil((my - UNIT) / UNIT) - 1;

            if (tx >= 0 && ty >= 0 && tx < UNIT && ty < UNIT) {
                const index = getIndex(tx, ty);
                const old = g.tiles[index];
                if (old == g.curColorNo) {
                    console.log('click tile skip same color');
                    return;
                }

                console.log('g.tiles', g.tiles);
                console.log('set tile', index, tx, ty, g.curColorNo, '<-', old);

                g.tiles[index] = g.curColorNo;
                g.play(SOUND_CLICK);
                g.historyAction.push({ x: tx, y: ty, c: old });
                g.uiUndo.color.a = A_ENABLE;
                g.effectFadeBig(
                    btninfoTile.x + (tx + 0.5) * UNIT,
                    btninfoTile.y + (ty + 0.5) * UNIT,
                    UNIT,
                    UNIT,
                    colors[g.curColorNo].color
                );
            }
        }
        // 칼라 선택인가.
        else */
        if (checkClick(mp, btninfoColor)) {
            const tx = Math.ceil((mx - btninfoColor.x) / UNIT) - 1;
            const ty = Math.ceil((my - btninfoColor.y) / UNIT) - 1;
            if (tx >= 0 && ty >= 0 && tx < 87 && ty < 8) {
                g.curColorNo = ty + tx * 8;
                g.updateSelectedColorUI();

                console.log('click color', tx, ty, g.curColorNo);
                g.play(SOUND_CLICK);
                g.effectFadeBig(
                    btninfoColor.x + (tx + 0.5) * UNIT,
                    btninfoColor.y + (ty + 0.5) * UNIT,
                    UNIT,
                    UNIT,
                    colors[g.curColorNo].color
                );
            }
        }
        else if (checkClick(mp, btninfoSave)) {
            if (g.saving) {
                console.log('click save skip, doing');
                g.play(SOUND_ERR);
                return;
            }

            console.log('save try');
            g.saving = true;
            g.uiSave.color.a = A_DISABLE;
            g.play(SOUND_SAVE);
            g.effectFadeBig(
                btninfoSave.cx,
                btninfoSave.cy,
                btninfoSave.w,
                btninfoSave.h,
                colorWhite.color
            );

            // 0 아니면 색 hex 값
            const colorCodes = [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
            ];

            for (let i = 0; i < g.tiles.length; i++) {
                const ci = g.tiles[i];
                colorCodes[ci]++;
            }

            for (let i = 0; i < colorCodes.length; i++) {
                if (colorCodes[i] < 1)
                    continue;
                colorCodes[i] = carr[i].hex;
            }

            const data = {
                cmd: 'kbEditPic.save',
                colors: colorCodes,
                tiles: g.tiles,
            };
            console.log('kbEditPic send save', data);
            postMessage(data);
        }
        else if (checkClick(mp, btninfoUndo)) {
            procUndo();
        }
    });

    k.keyRelease('u', procUndo);
});

k.scene("loading", () => {
    let count = 0;
    let uiText = k.add([
        k.text("LOADING   "),
        k.pos(W / 2, H / 2),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
    ]);

    k.loop(1, () => {
        count++;
        switch (count % 4) {
            case 0:
                uiText.text = "LOADING   ";
                break;
            case 1:
                uiText.text = "LOADING.  ";
                break;
            case 2:
                uiText.text = "LOADING.. ";
                break;
            case 3:
                uiText.text = "LOADING...";
                break;
        }
    });

    postMessage({
        cmd: 'kbEditPic.loadingComplete',
    })
});


k.scene("bg-render", () => {

    k.render(() => {
        let i, x, y;
        for (i = 0; i <= UNIT; i++) {
            x = btninfoTile.x;
            y = btninfoTile.y + i * UNIT;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x + UNIT * UNIT, y),
                colorGray
            );

            x = btninfoTile.x + i * UNIT;
            y = btninfoTile.y;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x, y + UNIT * UNIT),
                colorGray
            );
        }

        // for (i = 0; i < colors.length; i++) {
        //     k.drawRect(
        //         k.vec2(cpList[i].x, cpList[i].y),
        //         UNIT,
        //         UNIT,
        //         colors[i],
        //     );
        // }

        // draw null color X
        k.drawLine(
            k.vec2(btninfoColor.x, btninfoColor.y),
            k.vec2(btninfoColor.x + UNIT, btninfoColor.y + UNIT),
            colorRed
        );
        k.drawLine(
            k.vec2(btninfoColor.x + UNIT, btninfoColor.y),
            k.vec2(btninfoColor.x, btninfoColor.y + UNIT),
            colorRed
        );

        k.drawRect(
            k.vec2(btninfoMinimap.x, btninfoMinimap.y),
            btninfoMinimap.w,
            btninfoMinimap.h,
            colorGray
        );

        k.drawRect(
            k.vec2(btninfoSave.x, btninfoSave.y),
            btninfoSave.w,
            btninfoSave.h,
            colorGray
        );

        k.drawRect(
            k.vec2(btninfoUndo.x, btninfoUndo.y),
            btninfoUndo.w,
            btninfoUndo.h,
            colorGray
        );
    });
});

if (MODE_MAKE_BG) {
    k.start("bg-render");
} else {
    // k.start("game");
    k.start("loading");
}



