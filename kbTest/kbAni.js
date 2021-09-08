/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// http://localhost:8080/kbTest/main_ani.html

import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

// noscroll
document.body.style.overflow = 'hidden';

const W = 512;
const H = 512;
const k = kaboom({
    global: false,
    fullscreen: false,
    width: W,
    height: H,
    scale: 1,
    debug: true,
    clearColor: [0.25, 0.25, 0.25, 1],
});

// const colorWhite = k.color(1, 1, 1, 1);

const SLIDE_X = 9;

function getAni(v) {
    return {
        from: v,
        to: v + 2,
    }
}

const anims = {
    idle: getAni(SLIDE_X * 0),
    sword_attack1: getAni(SLIDE_X * 0 + 3),
    walk: getAni(SLIDE_X * 0 + 6),

    sword_idle: getAni(SLIDE_X * 1 + 0),
    sword_attack2: getAni(SLIDE_X * 1 + 3),
    unknown: getAni(SLIDE_X * 1 + 6),

    magic_wait: getAni(SLIDE_X * 2 + 0),
    bow_attack: getAni(SLIDE_X * 2 + 3),
    nee: getAni(SLIDE_X * 2 + 6),

    sword_idle2: getAni(SLIDE_X * 3 + 0),
    sword_attack3: getAni(SLIDE_X * 3 + 3),
    nee2: getAni(SLIDE_X * 3 + 6),

    hitted: getAni(SLIDE_X * 4 + 0),
    magic_wait2: getAni(SLIDE_X * 4 + 3),
    nee3: getAni(SLIDE_X * 4 + 6),

    hitted2: getAni(SLIDE_X * 5 + 0),
    action16: getAni(SLIDE_X * 5 + 3),
    dead: getAni(SLIDE_X * 5 + 6),
}

k.loadSprite("elf1", "../res/character/sideview_1_1.png", {
    sliceX: SLIDE_X,
    sliceY: 6,
    anims,
});

k.loadSprite("elf1_emo", "../res/character/elf1_emote.png", {
    sliceX: 12,
    sliceY: 8,
    anims: {
        emo1: getAni(12),
        emo2: getAni(12 * 2),
        emo3: getAni(12 * 3),
        emo4: getAni(12 * 4),
    }
});

k.scene("game", async () => {
    console.log('game start');

    let label = k.add([
        k.text(''),
        k.pos(0, 0),
        k.layer("bg"),
        k.scale(2),
        k.origin("topleft"),
    ]);
    label.text = 'idle';

    let elf = k.add([
        k.sprite('elf1', {
            animSpeed: 0.1,
            frame: 300,
        }),
        k.pos(W / 2, H / 2),
        k.layer("bg"),
        k.scale(2),
        k.origin("bot"),
    ]);
    elf.play('idle');

    let i = 0;
    const list = [];
    Object.keys(anims).forEach((k) => {
        list.push(k);
    });

    k.keyPress("left", () => {
        i++;
        const ani = list[i % list.length];
        label.text = `${i}: ${ani}`;
        elf.play(ani);
    });

    k.keyRelease("left", () => {
        //elf.play('idle');
    });

});

k.start('game');
