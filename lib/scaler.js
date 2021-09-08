/* eslint-disable prettier/prettier */
export default class Scaler {
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

    getScale() { return this.s; }
    getCamX() { return this.cam_x; }
    getCamY() { return this.cam_y; }

    vec2(x, y) {
        let k = this.k;
        let cx = this.cam_x;
        let cy = this.cam_y;
        let s = this.s;
        return k.vec2((x - cx) * s, (y - cy) * s);
    }
};
