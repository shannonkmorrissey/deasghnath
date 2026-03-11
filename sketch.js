let font;
let ritual =["d", "e", "a", "s", "g", "h", "n", "á", "t", "h"];

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    background(50, 0, 190);
    describe('the word "deasghnáth" in black 3D text\
    on a light green background. When you click and drag the canvas,\
    the text rotates around. swiping around a trackpad \
    zooms in and out.\
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');

    geom = font.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 20});
    geom.normalize();

}


function draw() {
    background(150, 200, 0);
    orbitControl();
    scale(3);
    model(geom);
    rotateX(QUARTER_PI);
    textFont(font);
    fill(0, 1)
    stroke(0);
    strokeWeight(1);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < ritual.length; i++) {
        let xPos = i*35;
        let yPos = 100;
        textSize(100);
        text(ritual[i], xPos, yPos);
    }
}