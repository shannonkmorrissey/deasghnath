let font1;
let font2;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 200; // higher = slower rotation

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    describe('looping animation of a 3D cluster of the repeated word "deasghnáth" with no fill and black slightly transparent outline\
        rotating along the x, y, and z axes against a light grey background.\
    ');

    font1 = await loadFont('assets/fonts/NovaCut-Regular.ttf');
    font2 = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');

    geom1 = font1.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 20});
    geom1.normalize();
    geom2 = font2.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 3, extrude: 15});
    geom2.normalize();
}

function draw() {
    background(100);
    textAlign(CENTER, CENTER);

    //updates angle I want to move the canvas according to time elapsed
    if (millis() - lastStep > stepInterval) {
        canvasAngle += PI/10;
        lastStep = millis();
    }

    //rotates axes
    rotateX(canvasAngle);
    rotateY(canvasAngle);
    rotateZ(canvasAngle);

    //checks if canvasAngle mod 2 is less than one. if so, draws barrel word
    //cluster. if not, draws snowflake word cluster
    if (canvasAngle % 2 < 1) {
        textFont(font1);
        fill(150, 60, 200);
        stroke(200, 20, 120, 40);
        scale(4);
        for (let wordAngle = 0; wordAngle < 1; wordAngle+=0.1) {
            model(geom1);
            rotateX(wordAngle);
        }
    } else {
        //snowflake word cluster
        textFont(font2);
        fill(200, 20, 120, 150);
        stroke(150, 60, 200, 50);
        scale(2.5);
        for (let wordAngle = 0; wordAngle < 3; wordAngle+=0.2) {
            model(geom2);
            rotateZ(wordAngle);
        }
    }

}