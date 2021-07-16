// https://www.youtube.com/watch?v=2nucjefSr6I

const k = kaboom({
    // global: true,
    // fullscreen: false,
    width: 320,
    height: 240,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
});


k.scene("game", () => {
    k.layers(["bg", "obj", "ui"], "obj");

    uiNow = k.add([
        k.text('->'),
        k.pos(110, 10),
        k.layer("ui"),
        // { value: "test" },
        k.origin("center"),
    ]);


});

k.start("game");