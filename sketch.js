let font;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 200; // higher = slower rotation

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    describe('looping animation of a 3D cluster of the repeated word "deasghnáth" with no fill and black slightly transparent outline\
        rotating along the x, y, and z axes against a light grey background.\
    ');

    font = await loadFont('assets/fonts/NovaCut-Regular.ttf');

    geom = font.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 3, extrude: 5});
    geom.normalize();
}

function draw() {
    background(190);
    textFont(font);
    noFill();
    stroke(0, 20);
    textAlign(CENTER, CENTER);
    scale(3.5);

    //updates angle I want to move the canvas according to time elapsed
    if (millis() - lastStep > stepInterval) {
        canvasAngle += PI/20;
        lastStep = millis();
    }

    //rotates axes
    rotateX(canvasAngle);
    rotateY(canvasAngle);
    rotateZ(canvasAngle);

    //draws 3D deasghnáth word cluster
    for (let wordAngle = 0; wordAngle < 3.5; wordAngle+=0.9) {
        model(geom);
        rotateX(wordAngle);
    }

}