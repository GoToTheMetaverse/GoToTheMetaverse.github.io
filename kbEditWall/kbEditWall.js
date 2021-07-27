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
    console.log('kbEditWall recv', recv);

    if (recv.cmd == 'kbEditWall.firstData') {
        k.go("game");
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

// 폭 높이중에 한쪽으로 꽉차도록 scale 구함
const MODE_MAKE_BG = false;
const W = 400;
const H = 400;

let scale = 1;
{
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rw = w / W;
    const rh = h / H;
    scale = (rw < rh) ? rw : rh;
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
// k.loadSprite("bg", "res/bg16.png");
// k.loadSprite("null_color", "res/null_color.png");

// CONST VALUE
// const btninfoMinimap = makeInfo({ x: UNIT * 18, y: UNIT, w: UNIT * 2, h: UNIT * 2 });

// GLOBAL OBJECT
const g = {
    play(id) {
        k.play(id, k.volume(0.3));
    }
};

postMessage({
    cmd: 'kbEditWall.frameSize',
    w: Math.floor(W * scale),
    h: Math.floor(H * scale),
});

k.scene("game", () => {

    k.layers(["bg", "obj", "ui", "effect"], "obj");

    // k.render(() => {
    // });
    // k.mouseClick(() => {
    //     var mp = k.mousePos();
    // });
    // k.keyRelease('u', procUndo);
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

if (MODE_MAKE_BG) {
    k.start("bg-render");
} else {
    // k.start("game");
    k.start("loading");
}



