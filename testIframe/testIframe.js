/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

// noscroll
document.body.style.overflow = 'hidden';


const g = {
    value: 'empty',
};

// accept information from the parent page
window.addEventListener("message", function (event) {
    if (event.data.cmd === undefined) return;
    console.log('iframe recv message', event.data);

    if (event.data.cmd == 'vue_send') {
        g.value = event.data.value;
        g.uiValue.text = g.value;
    }
});

function sendMessage(v) {
    console.log('iframe send', v);

    const req = {
        cmd: 'vue_recv',
        value: v,
    };
    window.parent.postMessage(req, '*');
    g.value = '';
    g.uiValue.text = '';
}



// 폭 높이중에 한쪽으로 꽉차도록 scale 구함
const gw = 300;
const gh = 200;
let scale = 1;
const k = kaboom({
    global: false,
    fullscreen: false,
    width: gw,
    height: gh,
    scale: scale,
    debug: true,
    clearColor: [0.25, 0.25, 0.25, 1],
});


k.scene("game", () => {
    k.layers(["bg", "obj", "ui", "effect"], "obj");
    g.uiValue = k.add([
        k.text(`VALUE`),
        k.pos(100, 100),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
    ]);
    g.uiValue.text = g.value;

    g.uiClick = k.add([
        k.text(`CLICK`),
        k.pos(100, 120),
        k.layer("ui"),
        k.origin("center"),
        k.color(1, 1, 1, 1),
    ]);

    k.mouseClick(() => {
        console.log('mouseClick');
        sendMessage(g.value);
    });
});

k.start("game");