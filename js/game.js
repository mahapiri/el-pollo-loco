let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My character ist', world.character);
}

window.addEventListener("keydown", (e) => {
    console.log(e);
})