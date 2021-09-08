/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// sample code
// https://replit.com/@thisisone/kaboomjs-resize#index.html

// test page
// http://localhost:8080/kbtest/kbresize.html

// link
import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

// no scroll bar
document.body.style.overflow = "hidden";

class Scaler {
    constructor(max_w, max_h, k) {
        this.max_w = max_w;
        this.max_h = max_h;
        this.s = 1;
        this.cam_x = 0;
        this.cam_y = 0;
        this.k = k;
    }

    update(w, h) {
        let sh = h / this.max_h;
        let sw = w / this.max_w;
        this.s = (sh < sw) ? sh : sw;
        if (this.s > 1) {
            this.s = s;
        }
    }

    move(x, y) {
        this.cam_x = x;
        this.cam_y = y;

        let k = this.k;
        let s = this.s;
        let hh = this.max_h / 2;
        let d = hh / s;

        k.camPos(k.vec2(d + x, d + y));
        k.camScale(k.vec2(s, s));
    }

    getScale() {
        return this.s;
    }
    getCamX() {
        return this.cam_x;
    }
    getCamY() {
        return this.cam_y;
    }

    vec2(x, y) {
        let k = this.k;
        let cx = this.cam_x;
        let cy = this.cam_y;
        let s = this.s;
        return k.vec2((x - cx) * s, (y - cy) * s);
    }
}

const W = 1024;
const H = 1024;
const k = kaboom({
    global: false,
    fullscreen: false,
    width: W,
    height: H,
    scale: 1,
    debug: true,
    clearColor: [0.25, 0.25, 0.25, 1],
});

const scaler = new Scaler(W, H, k);

const colorWhite = k.color(1, 1, 1, 1);

k.loadSprite("mark", "mark.png");
k.scene("game", async () => {
    console.log("game start");

    k.layers(["bg", "obj", "ui", "effect"], "obj");

    k.add([
        k.sprite("mark"),
        k.pos(0, 0),
        k.layer("obj"),
        k.scale(2, 2),
        k.origin("topleft"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(W / 4, H / 4),
        k.layer("obj"),
        k.scale(2, 2),
        k.origin("center"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(W / 2, H / 2),
        k.layer("obj"),
        k.scale(2, 2),
        k.origin("center"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(W, H),
        k.layer("obj"),
        k.scale(2, 2),
        k.origin("botright"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(0, H / 2),
        k.layer("obj"),
        k.scale(1, 1),
        k.origin("left"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(W / 2, 0),
        k.layer("obj"),
        k.scale(1, 1),
        k.origin("top"),
    ]);

    k.add([
        k.sprite("mark"),
        k.pos(W / 2, H),
        k.layer("obj"),
        k.scale(1, 1),
        k.origin("bot"),
    ]);

    k.add([
        k.text("center"),
        k.pos(W / 2, H / 2 - 40),
        k.layer("obj"),
        k.scale(4, 4),
        k.origin("center"),
    ]);

    let label = k.add([
        k.text("scale"),
        k.pos(20, 20),
        k.layer("ui"),
        k.scale(4, 4),
        k.origin("topleft"),
    ]);

    let move_x = 0;
    let move_y = 0;

    k.keyDown("left", () => {
        move_x -= 1;
    });
    k.keyDown("right", () => {
        move_x += 1;
    });
    k.keyDown("up", () => {
        move_y -= 1;
    });
    k.keyDown("down", () => {
        move_y += 1;
    });

    k.render(() => {
        scaler.update(window.innerWidth, window.innerHeight);
        scaler.move(move_x, move_y);

        label.pos.x = move_x;
        label.pos.y = move_y;
        label.text = `
window: ${window.innerWidth} x ${window.innerHeight}
scale: ${scaler.getScale()}
cam: ${scaler.getCamX()} x ${scaler.getCamY()}
        `.trim();

        let s1 = scaler.vec2(0, 0);
        let e1 = scaler.vec2(W, H);

        let s2 = scaler.vec2(W, 0);
        let e2 = scaler.vec2(0, H);

        k.drawLine(s1, e1, colorWhite);
        k.drawLine(s2, e2, colorWhite);
    });
});

k.start("game");
