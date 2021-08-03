/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// import 링크 출처: https://github.com/replit/kaboom
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";
import util from "./util.js";

// no log
// console.log = function () { }

// noscroll
document.body.style.overflow = 'hidden';


// component
function comImageMenu(_y, _w, _h) {

    let started = false;
    let hide = true;
    let scale = 2;
    const sy = _y;
    const info = util.makeInfo(0, 0, _w, _h);
    // console.log('comImageMenu start', info);

    return {
        update() {
            if (!started) {
                started = true;
                info.x = this.pos.x = g.width + 16;
                info.y = this.pos.y = sy;
                util.updateInfo(info);
                // console.log('start-info', info);
            }

            if (g.selectIndex < 0) {
                if (!hide) {
                    hide = true;
                    info.x = this.pos.x = g.width + info.w;
                    util.updateInfo(info);
                    // console.log('hide-info', info);
                }
                return;
            }

            const selected = g.useList[g.selectIndex].obj;
            if (selected.pos.x < g.width_13) {
                info.x = this.pos.x = g.width - info.w;
                util.updateInfo(info);
                // console.log('show-right', info);
            } else if (selected.pos.x > g.width_23) {
                info.x = this.pos.x = info.w;
                util.updateInfo(info);
                // console.log('show-left', info);
            } else if (hide) {
                hide = false;
                info.x = this.pos.x = g.width - 16;
                util.updateInfo(info);
                // console.log('show-def', info);
            }
        },
        isClick(mp) { return util.clickInfo(info, mp); },
        getInfo() { return info; },
        getSccle() { return scale; },
        setScale(s) {
            // console.log('setScale', scale, s);
            scale = s;
        },
        getNextScale() {
            if (scale == 2) { scale = 3; }
            else if (scale == 3) { scale = 4; }
            else { scale = 2; }
            return scale;
        },
    }
}

function comBigHide() {
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

async function loadImage(id, url) {
    const key = `${id}`;
    if (g.loadingMap[key] !== undefined) {
        console.log('loadImage skip', id, url);
        return;
    }

    // console.log('loadImage ', id, url);
    g.loadingMap[key] = { id, url };
    await k.loadSprite(key, url);
}

function pushImage(data) {
    // console.log('pushImage', data);
    const key = `${data.id}`;
    const obj = k.add([
        k.sprite(key),
        k.pos(data.x, data.y),
        k.layer("obj"),
        k.origin("center"),
        k.scale(data.s, data.s),
    ]);

    const ret = {
        id: data.id,
        obj,
    };
    g.useList.push(ret);
    g.selectIndex = g.useList.length - 1;
    g.uiScaleBtn.setScale(data.s);
}

// 메세지 교환
window.addEventListener("message", async function (event) {
    if (event.data.cmd === undefined) return;
    var recv = event.data;
    // console.log('kbEditWall procMessage', recv.cmd);

    if (recv.cmd == 'kbEditWall.firstData') {
        // console.log('recv data', recv);

        for (let i = 0; i < recv.wall_data.arrid.length; i++) {
            const data = recv.wall_data.arrid[i];
            await loadImage(data.id, data.url);
        }
        g.firstData = recv;

        k.go("game");
    } else if (recv.cmd == 'kbEditWall.addImage') {
        const data = recv;
        console.log('recv data', data);
        await loadImage(data.id, data.url);
        pushImage({
            id: data.id,
            x: g.width / 2,
            y: g.height / 2,
            s: 2,
        });
    } else if (recv.cmd == 'kbEditWall.saveComplete') {
        g.uiSaveBtn.color.a = 1;
    } else {
        console.error('kbEditWall recv unknown', recv);
        return;
    }
});

// 보내기
function postMessage(data) {
    // console.log('kbEditWall send', data);
    window.parent.postMessage(data, '*');
}

const W = 400;
const H = 300;

let scale = 1;
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
// const SOUND_ERR = 'SOUND_ERR';

// GAME CODE START
const SOUND_ERR = 'SOUND_ERR';
const SOUND_SAVE = 'SOUND_SAVE';
const SOUND_CLICK = 'SOUND_CLICK';
k.loadSprite("scale", "/res/scale.png");
k.loadSprite("trash", "/res/trash.png");
k.loadSprite("save", "/res/save.png");
k.loadSound(SOUND_SAVE, "/res/FA_Confirm_Button_1_4.wav");
k.loadSound(SOUND_ERR, "/res/FA_Select_Button_1_1.wav");
k.loadSound(SOUND_CLICK, "/res/LQ_Click_Button.wav");


// CONST VALUE
// const btninfoMinimap = makeInfo({ x: UNIT * 18, y: UNIT, w: UNIT * 2, h: UNIT * 2 });

const colorWhite = k.color(1, 1, 1, 1);

// GLOBAL OBJECT
const g = {
    width: W,
    width_half: W / 2,
    width_13: W / 3,
    width_23: (W / 3) * 2,
    height: H,
    play(id) {
        k.play(id, k.volume(0.3));
    },
    loadingMap: {}, // 로드한거
    useList: [ // 화면에 붙인거
        // id, x, y
    ],
    selectIndex: -1,
    renderRectOutline: (o) => {
        const UNIT = 16;
        const s = o.scale.x;
        const UNIT_HALF = UNIT * (s / 2);
        const sx = o.pos.x - UNIT_HALF;
        const sy = o.pos.y - UNIT_HALF;
        const ex = o.pos.x + UNIT_HALF;
        const ey = o.pos.y + UNIT_HALF;
        const c = colorWhite;
        k.drawLine(k.vec2(sx, sy), k.vec2(ex, sy), c);
        k.drawLine(k.vec2(ex, sy), k.vec2(ex, ey), c);
        k.drawLine(k.vec2(ex, ey), k.vec2(sx, ey), c);
        k.drawLine(k.vec2(sx, ey), k.vec2(sx, sy), c);
    },
    isInside: (o, mp) => {
        const dx = Math.abs(o.pos.x - mp.x);
        const dy = Math.abs(o.pos.y - mp.y);
        // console.log('inside', dx, dy, o.pos, mp);

        if (dx > 16)
            return false;
        if (dy > 16)
            return false;
        return true;
    },
    uiScaleBtn: null,
    uiTrashBtn: null,
    effectBigHide(info) {
        console.log('effectBigHide', info);
        k.add([
            k.rect(info.w, info.h),
            k.pos(info.x, info.y),
            k.layer("effect"),
            k.origin("center"),
            k.color(1, 1, 1, 1),
            comBigHide(),
        ]);
    },
    playSound(id) {
        k.play(id, k.volume(0.3));
    }
};

postMessage({
    cmd: 'kbEditWall.frameSize',
    w: Math.floor(W * scale),
    h: Math.floor(H * scale),
});

k.scene("game", () => {
    let firstDown = false;
    let firstDownPos = { x: 0, y: 0 };
    k.layers(["bg", "obj", "ui", "effect"], "obj");

    const UNIT = 24;
    let info = util.makeInfo(0, 0, UNIT, UNIT);
    g.uiScaleBtn = k.add([
        k.sprite("scale"),
        k.pos(),
        k.layer("ui"),
        k.origin("center"),
        colorWhite,
        comImageMenu(UNIT * 2, UNIT, UNIT),
    ]);

    info = util.makeInfo(0, 0, UNIT, UNIT);
    g.uiTrashBtn = k.add([
        k.sprite("trash"),
        k.pos(),
        k.layer("ui"),
        k.origin("center"),
        k.scale(1, 1),
        colorWhite,
        comImageMenu(UNIT * 3, UNIT, UNIT),
    ]);

    g.uiSaveBtnInfo = util.makeInfo(8 * 4, g.height - 8 * 3, 48, 32);
    g.uiSaveBtn = k.add([
        k.sprite("save"),
        k.pos(g.uiSaveBtnInfo.x, g.uiSaveBtnInfo.y),
        k.layer("ui"),
        k.origin("center"),
        k.scale(2, 2),
        colorWhite,
    ]);

    {
        const recv = g.firstData;
        for (let i = 0; i < recv.wall_data.arrimg.length; i++) {
            const data = recv.wall_data.arrimg[i];
            pushImage(data);
        }
    }


    k.mouseDown(() => {
        if (!firstDown)
            return;
        var mp = k.mousePos();
        if (mp.x == firstDownPos.x && mp.y == firstDownPos.y)
            return;

        // console.log('mouseDown');
        if (g.selectIndex >= 0) {
            // 드래깅 처리하면됨
            const x = Math.floor(mp.x);
            const y = Math.floor(mp.y);
            g.useList[g.selectIndex].obj.pos = k.vec2(x, y);
        }
    });

    k.mouseClick(() => {
        // console.log('mouseClick');
        const mp = firstDownPos = k.mousePos();


        if (g.uiScaleBtn.isClick(mp)) {
            // console.log('uiScaleBtn');
            g.playSound(SOUND_CLICK);
            g.effectBigHide(g.uiScaleBtn.getInfo());
            const s = g.uiScaleBtn.getNextScale();
            const selected = g.useList[g.selectIndex].obj;
            selected.scale = k.vec2(s, s);
            return;
        }

        if (g.uiTrashBtn.isClick(mp)) {
            // console.log('uiTrashBtn');
            g.playSound(SOUND_CLICK);
            g.effectBigHide(g.uiTrashBtn.getInfo());
            const selected = g.useList[g.selectIndex].obj;
            k.destroy(selected);
            g.useList.splice(g.selectIndex, 1);
            g.selectIndex = -1;
            return;
        }

        if (util.clickInfo(g.uiSaveBtnInfo, mp)) {

            if (g.uiSaveBtn.color.a < 1.0) {
                console.log('saveBtn is busy');
                g.playSound(SOUND_ERR);
                return;
            }
            // console.log('uiSaveBtn');
            g.playSound(SOUND_SAVE);
            g.effectBigHide(g.uiSaveBtnInfo);

            const arrid = [];
            Object.keys(g.loadingMap).forEach((k) => {
                const data = g.loadingMap[k];
                arrid.push({
                    id: data.id,
                    url: data.url,
                });
            });

            const arrimg = [];
            for (let i = 0; i < g.useList.length; i++) {
                const data = g.useList[i];
                const obj = data.obj;
                arrimg.push({
                    id: data.id,
                    x: obj.pos.x,
                    y: obj.pos.y,
                    s: obj.scale.x,
                });
            }

            console.log('send save', arrimg);
            g.uiSaveBtn.color.a = 0.5;
            postMessage({
                cmd: 'kbEditWall.save',
                width: g.width,
                height: g.height,
                arrid: arrid,
                arrimg: arrimg,
            });
        }

        // 드래깅할지 검색
        g.selectIndex = -1;
        for (let i = 0; i < g.useList.length; i++) {
            // 표시 순으로 선택되야하므로 거꾸로 돌림
            const n = g.useList.length - 1 - i;
            const o = g.useList[n].obj;

            if (g.isInside(o, mp)) {
                g.selectIndex = n;
                g.uiScaleBtn.setScale(o.scale.x);
                firstDown = true; // drag 지원
                break;
            }
        }
    });

    k.mouseRelease(() => {
        // console.log('mouseRelease');
        firstDown = false;
    });

    k.render(() => {
        if (g.selectIndex >= 0) {
            const o = g.useList[g.selectIndex].obj
            g.renderRectOutline(o);
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

    postMessage({
        cmd: 'kbEditWall.loadingComplete',
    })
});


k.start("loading");



