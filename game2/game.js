/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// import 링크 출처: https://github.com/replit/kaboom
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

// noscroll
document.body.style.overflow = 'hidden';

// localStorage.setItem('curImageId', 'abc');
const picEditDataText = localStorage.getItem('picEditData');
const pic = JSON.parse(picEditDataText);
console.log('picEditData', pic);

const url = pic.url;
const loginToken = pic.loginToken;
const userUid = pic.userUid;
const curEditPic = pic.pic;

// 데이터가 없는 경우 기본값을 채워넣는다.
if (curEditPic.pic_data === undefined) {
    console.log('curEditPic.tiles is undefined');
    for (let i = 0; i < 15 * 15; i++) {
        curEditPic.pic_data.tiles += '0';
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

function color255(r, g, b) {
    let c = k.color(r / 255, g / 255, b / 255, 1);
    return c;
}



// 폭 높이중에 한쪽으로 꽉차도록 scale 구함
const gw = 300;
const gh = 255;
let scale = 1;
{
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rw = w / gw;
    const rh = h / gh;
    const r = rw < rh ? rw : rh;
    scale = r;
    // console.log('scale', scale, w, h);
}

const k = kaboom({
    global: false,
    fullscreen: false,
    width: gw,
    height: gh,
    scale: scale,
    debug: true,
    clearColor: [0.25, 0.25, 0.25, 1],
});


//
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

const btninfoTitle = { x: 0, y: 0, w: gw, h: 15 };
btninfoTitle.cx = btninfoTitle.x + btninfoTitle.w / 2;
btninfoTitle.cy = btninfoTitle.y + btninfoTitle.h / 2;
const btninfoMinimap = { x: 255, y: 15, w: 30, h: 30 };
btninfoMinimap.ex = btninfoMinimap.x + btninfoMinimap.w;
btninfoMinimap.ey = btninfoMinimap.y + btninfoMinimap.h;
const btninfoColor = { x: 255, y: 60, w: 15 * 2, h: 15 * 8 };
btninfoColor.ex = btninfoColor.x + btninfoColor.w;
btninfoColor.ey = btninfoColor.y + btninfoColor.h;
const btninfoSave = { x: 250, y: 195, w: 40, h: 15 };
btninfoSave.ex = btninfoSave.x + btninfoSave.w;
btninfoSave.ey = btninfoSave.y + btninfoSave.h;
btninfoSave.cx = btninfoSave.x + btninfoSave.w / 2;
btninfoSave.cy = btninfoSave.y + btninfoSave.h / 2;
const btninfoUndo = { x: 250, y: 215, w: 40, h: 15 };
btninfoUndo.ex = btninfoUndo.x + btninfoUndo.w;
btninfoUndo.ey = btninfoUndo.y + btninfoUndo.h;
btninfoUndo.cx = btninfoUndo.x + btninfoUndo.w / 2;
btninfoUndo.cy = btninfoUndo.y + btninfoUndo.h / 2;
const btninfoTile = { x: 15, y: 15 };
btninfoTile.ex = btninfoTile.x + 15 * 15;
btninfoTile.ey = btninfoTile.y + 15 * 15;

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

const SOUND_ERR = 'SOUND_ERR';
const SOUND_SAVE = 'SOUND_SAVE';
const SOUND_CLICK = 'SOUND_CLICK';

k.loadSprite("bg", "res/bg.png");
k.loadSound(SOUND_SAVE, "res/FA_Confirm_Button_1_4.wav");
k.loadSound(SOUND_ERR, "res/FA_Select_Button_1_1.wav");
k.loadSound(SOUND_CLICK, "res/LQ_Click_Button.wav");


const g = {
    curColorNo: 8,
    historyAction: [],
    colorPickPosX: (i) => {
        const x = Math.floor(i / 8);
        return btninfoColor.x + 7.5 + x * 15;
    },
    colorPickPosY: (i) => {
        const y = i % 8;
        return btninfoColor.y + 7.5 + y * 15;
    },
    updatecurColorUI: () => {
        const x = g.colorPickPosX(g.curColorNo);
        const y = g.colorPickPosY(g.curColorNo);
        console.log('updatecurColorUI', x, y);
        g.uiSelectedColorShadow.pos = k.vec2(x + 1, y + 1);
        g.uiSelectedColor.pos = k.vec2(x - 1, y - 1);
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

    let tiles = [];
    {
        for (let i = 0; i < 15; i++) {
            tiles.push([
                0, 0, 0, 0, 0, // 0
                0, 0, 0, 0, 0, // 5
                0, 0, 0, 0, 0, // 10
            ]);
        }


        let x = 0;
        let y = 0;
        for (let i = 0; i < curEditPic.pic_data.length; i++) {
            const k = curEditPic.pic_data[i];
            const ox = x;
            const oy = y;

            x++;
            if (x >= 15) {
                x = 0;
                y++;
            }

            switch (k) {
                case '0': tiles[ox][oy] = 0; break;
                case '1': tiles[ox][oy] = 1; break;
                case '2': tiles[ox][oy] = 2; break;
                case '3': tiles[ox][oy] = 3; break;
                case '4': tiles[ox][oy] = 4; break;
                case '5': tiles[ox][oy] = 5; break;
                case '6': tiles[ox][oy] = 6; break;
                case '7': tiles[ox][oy] = 7; break;
                case '8': tiles[ox][oy] = 8; break;
                case '9': tiles[ox][oy] = 9; break;
                case 'A': tiles[ox][oy] = 10; break;
                case 'B': tiles[ox][oy] = 11; break;
                case 'C': tiles[ox][oy] = 12; break;
                case 'D': tiles[ox][oy] = 13; break;
                case 'E': tiles[ox][oy] = 14; break;
                case 'F': tiles[ox][oy] = 15; break;
            }
        }
        console.log('load complete');
    }

    k.layers(["bg", "obj", "ui", "effect"], "obj");

    g.bg = k.add([
        k.sprite('bg'),
        k.pos(0, 0),
        k.layer("bg"),
        k.origin("topleft"),
    ]);

    g.uiTitle = k.add([
        k.text(`${curEditPic.uid}:${curEditPic.name}`),
        k.pos(btninfoTitle.cx, btninfoTitle.cy),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
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

    g.uiNullColor = k.add([
        k.text("X"),
        k.pos(g.colorPickPosX(0), g.colorPickPosY(0)),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 0, 0, 1),
        k.scale(1.8, 1.8),
    ]);

    g.uiSelectedColorShadow = k.add([
        k.text("*"),
        k.pos(0, 0),
        k.layer("ui"),
        k.origin("center"),
        k.color(0, 0, 0, 0.5),
    ]);

    g.uiSelectedColor = k.add([
        k.text("*"),
        k.pos(0, 0),
        k.layer("ui"),
        k.origin("center"),
        k.color(.9, .9, .9, 1),
    ]);
    g.updatecurColorUI();



    k.render(() => {
        let x, y;
        for (x = 0; x < 15; x++) {
            for (y = 0; y < 15; y++) {
                if (tiles[x][y] == 0)
                    continue;
                const cindex = tiles[x][y];
                k.drawRect(
                    k.vec2(15 + x * 15, 15 + y * 15),
                    15,
                    15,
                    color1All[cindex]
                );
                // minimap
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
        }
    });

    k.mouseClick(() => {
        var mp = k.mousePos();
        var mx = mp.x;
        var my = mp.y;

        // 타일 클릭인가
        if (mx >= btninfoTile.x && my >= btninfoTile.y
            && mx <= btninfoTile.ex && my <= btninfoTile.ey) {
            const tx = Math.ceil((mx - 15) / 15) - 1;
            const ty = Math.ceil((my - 15) / 15) - 1;
            // console.log('click tile', tx, ty);

            if (tx >= 0 && ty >= 0 && tx < 15 && ty < 15) {
                const old = tiles[tx][ty];
                if (old == g.curColorNo) {
                    console.log('click tile skip same color');
                    return;
                }

                console.log('click tile #2', tx, ty, g.curColorNo, '<-', old);


                tiles[tx][ty] = g.curColorNo;
                g.play(SOUND_CLICK);
                g.historyAction.push({ x: tx, y: ty, c: old });
                g.effectFadeBig(
                    btninfoTile.x + tx * 15 + 7.5,
                    btninfoTile.y + ty * 15 + 7.5,
                    15,
                    15,
                    color1All[g.curColorNo].color
                );
            }
        }
        // 칼라 선택인가.
        else if (mx >= btninfoColor.x && my >= btninfoColor.y
            && mx <= btninfoColor.ex && my <= btninfoColor.ey) {
            const tx = Math.ceil((mx - btninfoColor.x) / 15) - 1;
            const ty = Math.ceil((my - btninfoColor.y) / 15) - 1;
            if (tx >= 0 && ty >= 0 && tx <= 7 && ty <= 7) {
                g.curColorNo = ty + tx * 8;
                g.updatecurColorUI();

                console.log('click color', tx, ty, g.curColorNo);
                g.play(SOUND_CLICK);
                g.effectFadeBig(
                    btninfoColor.x + tx * 15 + 7.5,
                    btninfoColor.y + ty * 15 + 7.5,
                    15,
                    15,
                    color1All[g.curColorNo].color
                );
            }
        }
        else if (mx >= btninfoSave.x && my >= btninfoSave.y
            && mx <= btninfoSave.ex && my <= btninfoSave.ey) {
            if (g.saving) {
                console.log('click save skip, doing');
                g.play(SOUND_ERR);
                return;
            }

            console.log('click save');

            g.play(SOUND_SAVE);
            g.effectFadeBig(
                btninfoSave.cx,
                btninfoSave.cy,
                btninfoSave.w,
                btninfoSave.h,
                colorWhite.color
            );

            g.saving = true;

            let arr = [];
            for (let i = 0; i < 15 * 15; i++) {
                const x = i % 15;
                const y = Math.floor(i / 15);
                switch (tiles[x][y]) {
                    case 0: arr.push('0'); break;
                    case 1: arr.push('1'); break;
                    case 2: arr.push('2'); break;
                    case 3: arr.push('3'); break;
                    case 4: arr.push('4'); break;
                    case 5: arr.push('5'); break;
                    case 6: arr.push('6'); break;
                    case 7: arr.push('7'); break;
                    case 8: arr.push('8'); break;
                    case 9: arr.push('9'); break;
                    case 10: arr.push('A'); break;
                    case 11: arr.push('B'); break;
                    case 12: arr.push('C'); break;
                    case 13: arr.push('D'); break;
                    case 14: arr.push('E'); break;
                    case 15: arr.push('F'); break;
                    default: arr.push(' '); break;
                }
            }

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
                    } else {
                        console.log('editPicture success', res);
                    }
                    g.saving = false;
                });
            console.log('click save post req');
        }
        else if (mx >= btninfoUndo.x && my >= btninfoUndo.y
            && mx <= btninfoUndo.ex && my <= btninfoUndo.ey) {
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
            const tx = t.x;
            const ty = t.y;
            const old = tiles[tx][ty];
            // console.log('click undo', t, oldColorNo);
            tiles[tx][ty] = t.c;

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


k.scene("bg-render", () => {
    k.render(() => {
        let i, x, y;
        for (i = 0; i <= 15; i++) {
            x = btninfoTile.x;
            y = btninfoTile.y + i * 15;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x + 15 * 15, y),
                colorGray
            );

            x = btninfoTile.x + i * 15;
            y = btninfoTile.y;
            k.drawLine(
                k.vec2(x, y),
                k.vec2(x, y + 15 * 15),
                colorGray
            );
        }

        for (i = 0; i < color1All.length; i++) {
            const x = Math.floor(i / 8);
            const y = i % 8;
            k.drawRect(
                k.vec2(btninfoColor.x + x * 15, btninfoColor.y + y * 15),
                15,
                15,
                color1All[i],
            );

        }



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

k.start("game");
// k.start("bg-render");

