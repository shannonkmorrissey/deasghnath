let font;

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    background(50, 0, 190);
    describe('the word "deasghnáth" written 5 times in slightly transparent\
    blue 3D text, all on top of each other intersecting to form a mass of 3D words\
    on a light green background. the form is rotatable with the mouse.\
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');

    geom = font.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 2, extrude: 100});
    geom.normalize();
}

function draw() {
    background(150, 200, 0);
    orbitControl();
    textFont(font);
    fill(0, 55, 102, 50)
    noStroke();
    textAlign(CENTER, CENTER);
    scale(3.5);
    model(geom);
    rotateX(0.5);
    model(geom);
    rotateY(0.5);
    model(geom);
    rotateZ(-1);
    model(geom);
    rotateX(1);
    model(geom);

}