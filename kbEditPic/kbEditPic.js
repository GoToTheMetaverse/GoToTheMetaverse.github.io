/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// import 링크 출처: https://github.com/replit/kaboom
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";
// no log
console.log = function () { }

// noscroll
document.body.style.overflow = 'hidden';

// 메세지 교환
window.addEventListener("message", function (event) {
    if (event.data.cmd === undefined) return;
    var recv = event.data;
    console.log('kbEditPic recv', recv);

    if (recv.cmd == 'kbEditPic.firstData') {
        g.tiles = recv.tiles;
        k.go("game");
        console.log('start game scene');
    } else if (recv.cmd == 'kbEditPic.saveComplete') {
        g.saving = false;
        g.uiSave.color.a = A_ENABLE;
    } else {
        console.error('kbEditPic recv unknown', recv);
        return;
    }
});

// 보내기
function sendMessage(data) {
    console.log('kbEditPic send', data);
    window.parent.postMessage(data, '*');
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
console.log('W', W, 'H', H);

let scale = 1;
if (!MODE_MAKE_BG) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rw = w / W;
    const rh = h / H;
    const r = rw < rh ? rw : rh;
    scale = r;
    // console.log('scale', scale, w, h);
    // scale = 1;
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
k.loadSound(SOUND_SAVE, "res/FA_Confirm_Button_1_4.wav");
k.loadSound(SOUND_ERR, "res/FA_Select_Button_1_1.wav");
k.loadSound(SOUND_CLICK, "res/LQ_Click_Button.wav");




let pic;
let url;
let loginToken;
let userUid;
let curEditPic;

// CONST COLOR
const color0 = color255(0, 0, 0); // null color
const color1 = color255(0, 0, 0);
const color2 = color255(128, 128, 128);
const color3 = color255(255, 0, 0);
const color4 = color255(255, 128, 0);
const color5 = color255(0, 255, 0);
const color6 = color255(0, 255, 128);
const color7 = color255(0, 0, 255);

const color8 = color255(255, 255, 255);
const color9 = color255(192, 192, 192);
const color10 = color255(255, 128, 64);
const color11 = color255(255, 255, 64);
const color12 = color255(128, 255, 128);
const color13 = color255(64, 255, 128);
const color14 = color255(128, 128, 255);
const color15 = color255(128, 128, 255);

const colorBlack = color1;
const colorWhite = color8;
const colorGray = color2;
const colorRed = color3;

const btninfoColorLine1 = [
    color0, color1, color2, color3,
    color4, color5, color6, color7,
];
const btninfoColorLine2 = [
    color8, color9, color10, color11,
    color12, color13, color14, color15,
];
const color1All = [
    color0, color1, color2, color3,
    color4, color5, color6, color7,
    color8, color9, color10, color11,
    color12, color13, color14, color15,
]


// CONST VALUE
const btninfoMinimap = makeInfo({ x: UNIT * 18, y: UNIT, w: UNIT * 2, h: UNIT * 2 });
const btninfoColor = makeInfo({ x: UNIT * 18, y: UNIT * 4, w: UNIT * 2, h: UNIT * 8 });
const btninfoSave = makeInfo({ x: UNIT * 18 - 2, y: UNIT * 13, w: UNIT * 2 + 4, h: UNIT });
const btninfoUndo = makeInfo({ x: UNIT * 18 - 2, y: UNIT * 15, w: UNIT * 2 + 4, h: UNIT });
const btninfoTile = makeInfo({ x: UNIT, y: UNIT, w: UNIT * UNIT, h: UNIT * UNIT });

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

k.scene("game", () => {

    k.layers(["bg", "obj", "ui", "effect"], "obj");

    g.bg = k.add([
        k.sprite('bg'),
        k.pos(0, 0),
        k.layer("bg"),
        k.origin("topleft"),
    ]);

    g.uiSave = k.add([
        k.text("SAVE"),
        k.pos(btninfoSave.cx, btninfoSave.cy),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
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
        for (let i = 0; i < g.tiles.length; i++) {
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
                color1All[cindex]
            );
            k.drawRect(
                k.vec2(
                    btninfoMinimap.x + x * 2,
                    btninfoMinimap.y + y * 2
                ),
                2,
                2,
                color1All[cindex]
            );
        }
    });

    k.mouseClick(() => {
        var mp = k.mousePos();
        var mx = mp.x;
        var my = mp.y;

        // 타일 클릭인가
        if (checkClick(mp, btninfoTile)) {
            const tx = Math.ceil((mx - UNIT) / UNIT) - 1;
            const ty = Math.ceil((my - UNIT) / UNIT) - 1;
            // console.log('click tile', tx, ty);

            if (tx >= 0 && ty >= 0 && tx < UNIT && ty < UNIT) {
                const index = getIndex(tx, ty);
                const old = g.tiles[index];
                if (old == g.curColorNo) {
                    console.log('click tile skip same color');
                    return;
                }

                // console.log('click tile #2', tx, ty, g.curColorNo, '<-', old);

                g.tiles[index] = g.curColorNo;
                g.play(SOUND_CLICK);
                g.historyAction.push({ x: tx, y: ty, c: old });
                g.uiUndo.color.a = A_ENABLE;
                g.effectFadeBig(
                    btninfoTile.x + (tx + 0.5) * UNIT,
                    btninfoTile.y + (ty + 0.5) * UNIT,
                    UNIT,
                    UNIT,
                    color1All[g.curColorNo].color
                );
            }
        }
        // 칼라 선택인가.
        else if (checkClick(mp, btninfoColor)) {
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
                    color1All[g.curColorNo].color
                );
            }
        }
        else if (checkClick(mp, btninfoSave)) {
            if (g.saving) {
                console.log('click save skip, doing');
                g.play(SOUND_ERR);
                return;
            }

            g.saving = true;
            g.uiSave.color.a = A_DISABLE;
            console.log('click save');

            g.play(SOUND_SAVE);
            g.effectFadeBig(
                btninfoSave.cx,
                btninfoSave.cy,
                btninfoSave.w,
                btninfoSave.h,
                colorWhite.color
            );

            sendMessage({
                cmd: 'kbEditPic.save',
                tiles: g.tiles,
            })

            /*
            const req = {
                api: 'savePicture',
                loginToken,
                userUid,
                picUid: curEditPic.uid,
                picTileText: arr.join(''),
            };

            $.post(
                url,
                req,
                function (res, textStatus, jqXHR) {
                    if (textStatus != 'success') {
                        console.log('editPicture error', textStatus);
                    } else if (res.code != 100) {
                        console.log('editPicture res.code error', res);
                    } else {
                        console.log('editPicture success', res);
                    }
                    g.saving = false;
                });
            console.log('click save post req');
            */
        }
        else if (checkClick(mp, btninfoUndo)) {
            if (g.historyAction.length < 1) {
                console.log('click undo, no history');
                g.play(SOUND_ERR);
                return;
            }


            g.play(SOUND_CLICK);
            g.effectFadeBig(
                btninfoUndo.cx,
                btninfoUndo.cy,
                btninfoUndo.w,
                btninfoUndo.h,
                colorWhite.color
            );


            const t = g.historyAction.pop();
            if (g.historyAction.length < 1) {
                g.uiUndo.color.a = A_DISABLE;
            }
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
                    color1All[old].color
                );
            }
        }
    });
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

    sendMessage({
        cmd: 'kbEditPic.loadingComplete',
    })
});


k.scene("bg-render", () => {

    let cpList = [];
    for (let i = 0; i < color1All.length; i++) {
        const x = Math.floor(i / 8);
        const y = i % 8;
        const px = btninfoColor.x + x * UNIT;
        const py = btninfoColor.y + y * UNIT;
        cpList.push({ i: i, x: px, y: py });
    }
    console.log('cpList', cpList);

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

        for (i = 0; i < color1All.length; i++) {
            k.drawRect(
                k.vec2(cpList[i].x, cpList[i].y),
                UNIT,
                UNIT,
                color1All[i],
            );
            // k.drawRect(
            //     k.vec2(cpList[i].x + 6, cpList[i].y + 6),
            //     4,
            //     4,
            //     colorWhite,
            // );
        }

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



