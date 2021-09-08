/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// http://localhost:8080/kbResize/main.html

// import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";
import kaboom from "https://kaboomjs.com/lib/0.6.0/kaboom.mjs";
// noscroll
document.body.style.overflow = 'hidden';

kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
});

loadSprite("mark", "mark.png");
loadShader("test", null, `
uniform float u_ratio;
uniform float u_time;
uniform vec2 u_mpos;
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
vec2 pp = uv - u_mpos;
float angle = atan(pp.y, pp.x);
float dis = length(pp);
float c = sin(dis * 48.0 + u_time * 10.0 + angle);
return vec4(c, c, c, u_ratio);
}
`);

let r = 0;

add([
    rect(width(), height()),
    shader("test"),
    {
        update() {
            r += dt();
            if (r > 1) {
                r -= 1;
            }
            this.uniform["u_ratio"] = r;
            this.uniform["u_time"] = time();
            this.uniform["u_mpos"] = mousePos().scale(1 / width(), 1 / height());
        },
    }
]);