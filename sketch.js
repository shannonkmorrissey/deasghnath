/*
the word "deasghnáth" moves across a black background from top left to bottom right, changing fill color as it goes. the stroke color changes
according to mouse position on the canvas.
*/

let novaCut;

async function setup() {
    createCanvas(800, 600);
    novaCut = await loadFont('/assets/fonts/NovaCut-Regular.ttf');
}

function draw() {
    background(0);
    textFont(novaCut);
    fill(map(frameCount, 0, 800, 0, 255), 100, map(frameCount, 0, 800, 0, 255));
    strokeWeight(9);
    stroke(map(mouseX, 0, 800, 0, 255), map(mouseY, 0, 800, 0, 255), map(mouseY, 0, 800, 0, 255));
    textSize(100);
    textAlign(CENTER, CENTER);
    text("deasghnáth", frameCount, frameCount);
}