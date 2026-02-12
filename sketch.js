let novaCut;

async function setup() {
    createCanvas(800, 600);
    novaCut = await loadFont('/assets/fonts/NovaCut-Regular.ttf');
}

function draw() {
    background(0);
    textFont(novaCut);
    fill(255);
    strokeWeight(5);
    stroke(255,0,0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("deasghnáth", width / 2, height / 2);
}