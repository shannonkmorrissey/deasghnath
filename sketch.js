let font;

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    background(50, 0, 190);
    describe('the word "deasghnáth" written 5 times in slightly transparent\
    blue 3D text, all on top of each other intersecting to form a mass of 3D words\
    on a light green background. the form is rotatable with the mouse.\
    ');
    font = await loadFont('assets/fonts/NovaCut-Regular.ttf');

    geom = font.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 10});
    geom.normalize();
}

function draw() {
    background(150, 200, 0);
    orbitControl();
    textFont(font);
    noFill();
    fill(0, 55, 102)
    stroke(0);
    //noStroke();
    textAlign(CENTER, CENTER);
    scale(3.5);

    for (let angle = 0; angle < 1; angle+=0.2) {
        model(geom);
        rotateX(angle);
    }

}