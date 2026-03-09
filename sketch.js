let font;
let ritual =["d", "e", "a", "s", "g", "h", "n", "á", "t", "h"];

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    background(50, 0, 190);
    describe('the word "deasghnáth" in solid black text\
    on a dark blue background. When you click and drag the canvas\
    the text rotates around the x-axis and leaves a trail of \
    the word on the canvas.\
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');
}


function draw() {
    rotateX(QUARTER_PI);
    textFont(font);
    stroke(50, 25, 100);
    strokeWeight(50);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < ritual.length; i++) {
        let xPos = i*35;
        let yPos = 100;
        textSize(75);
        text(ritual[i], xPos, yPos);
    }
    
    orbitControl();
}