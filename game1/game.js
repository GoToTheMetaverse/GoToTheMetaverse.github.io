// https://www.youtube.com/watch?v=2nucjefSr6I

console.log('innerWidth', window.innerWidth);


const k = kaboom({
    // global: true,
    // fullscreen: false,
    width: 320,
    height: 240,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
});

// var data1 = localStorage.getItem('game1');
var data1 = document.cookie;
console.log('game1', data1);

// k.loadRoot("http://127.0.0.1:5501/public/");
let urlRoot =
    window.location.protocol + "//" + window.location.host + "/game1/";
k.loadRoot(urlRoot);

k.loadSprite("coin", "coin.png");
k.loadSprite("brick", "brick.png");
k.loadSprite("block", "block.png");


//

let now_block = 'block';
let scene_name = 'draw'; // draw, select
let mymap = {};
let uiNow = null;
let uiNowBlock = null;
let uiSelect = null;
let uiSelectCancel = null;
let uiSave = null;

k.scene("game", () => {
    k.layers(["bg", "obj", "ui"], "obj");

    const map = [
        "=====  =   =  ==",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "=12345678912345=",
        "================",
    ];

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [k.sprite("brick"), k.solid()],
        '@': [k.sprite("block"), k.solid(), "coin-surprise"],
        'D': [k.sprite("coin"), "coin"],
    };

    const gameLevel = k.addLevel(map, levelCfg);

    uiNow = k.add([
        k.text('->'),
        k.pos(110, 10),
        k.layer("ui"),
        // { value: "test" },
        k.origin("center"),
    ]);

    uiNowBlock = k.add([
        k.sprite(now_block),
        k.pos(130, 10),
        k.layer("ui"),
        k.origin("center"),
    ]);

    uiSelect = k.add([
        k.text('SELECT'),
        k.pos(190, 10),
        k.layer("ui"),
        k.origin("center"),
    ]);

    uiSelectCancel = k.add([
        k.text('BACK'),
        k.color(1, 1, 1),
        k.pos(190, 10),
        k.layer("ui"),
        k.origin("center"),
    ]);
    hideUI(uiSelectCancel);


    uiSave = k.add([
        k.text('SAVE'),
        k.pos(260, 10),
        k.layer("ui"),
        k.origin("center"),
    ]);

    k.mouseClick(() => {
        const mpos = k.mousePos();

        if (clickCheck(mpos.x, mpos.y, uiSelect.pos, 60, 20)
        ) {
            console.log('click select');

            const splash = k.add([
                k.rect(60, 20),
                k.color(0, 1, 0),
                k.layer("ui"),
                k.pos(uiSelect.pos.x, uiSelect.pos.y),
                k.origin("center"),
            ]);
            k.wait(.1, () => {
                k.destroy(splash)
            });

            sceneSelect();
            return;
        }

        if (clickCheck(mpos.x, mpos.y, uiSelectCancel.pos, 60, 20)
        ) {
            console.log('click select cancel');

            const splash = k.add([
                k.rect(60, 20),
                k.color(0, 1, 0),
                k.layer("ui"),
                k.pos(uiSelectCancel.pos.x, uiSelectCancel.pos.y),
                k.origin("center"),
            ]);
            k.wait(.1, () => {
                k.destroy(splash)
            });

            sceneDraw();
            return;
        }

        if (clickCheck(mpos.x, mpos.y, uiSave.pos, 40, 20)) {
            console.log('click save');

            const splash = k.add([
                k.rect(40, 20),
                k.color(0, 1, 0),
                k.layer("ui"),
                k.pos(uiSave.pos.x, uiSave.pos.y),
                k.origin("center"),
            ]);
            k.wait(.3, () => {
                k.destroy(splash)
            });
            return;
        }

        const bx = Math.ceil(mpos.x / 20) - 2; // 0 ~ 14
        const by = Math.ceil(mpos.y / 20) - 2; // 0 ~ 14
        const key = `${bx}x${by}`;
        console.log('click', key);

        // bx by = 1 ~ 14
        if (bx < 0 || bx >= 16 || by < 0 || by >= 16) {
            return
        }


        px = (bx + 2) * 20 - 10;
        py = (by + 2) * 20 - 10;

        if (mymap[key] == undefined) {
            const newtile = k.add([
                k.sprite(now_block),
                k.pos(px, py),
                k.origin('center'),
            ]);
            newtile.bx = bx;
            newtile.by = by;
            newtile.bname = 'block'
            mymap[key] = newtile;
        }
        else {
            const oldtile = mymap[key];
            k.destroy(oldtile);
            delete mymap[key];
        }
    });

    sceneDraw();
});

k.start("game");





function clickCheck(mx, my, pos, w, h) {
    let sx = pos.x - w / 2;
    let sy = pos.y - w / 2;
    let ex = pos.x + w / 2;
    let ey = pos.y + w / 2;

    if (mx < sx || mx > ex) {
        return false;
    }

    if (my < sy || my > ey) {
        return false;
    }

    return true;
}

function hideUI(obj) {
    obj.pos.y -= 1000;
}

function showUI(obj) {
    obj.pos.y += 1000;
}

function sceneSelect() {

    console.log('sceneSelect');

    for (const key in mymap) {
        const data = mymap[key];
        hideUI(data);
    }

    hideUI(uiSelect);
    hideUI(uiSave);

    showUI(uiSelectCancel);

    scene_name = 'select';
}

function sceneDraw() {

    if (scene_name == 'select') {
        console.log('sceneChangeDraw');

        for (const key in mymap) {
            const data = mymap[key];
            showUI(data);
        }
        showUI(uiSelect);
        showUI(uiSave);

        hideUI(uiSelectCancel);
    }
    scene_name = 'draw';
}

