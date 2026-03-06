let font;
let ritual =["d", "e", "a", "s", "g", "h", "n", "á", "t", "h"];

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    background(50, 0, 190);
    
    describe('a vibrant blue background with the the letters of the word "deasghnáth" \
        in a purplish red hue arranged on top of each other so as\
        to make the word illegible. each of the letters are slowly moving \
        in a small cyclic pattern. \
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');

    let baseY = 200;
    strokeWeight(1);
    textSize(24);
    text('deasghnáth', 0, baseY);
    let a = textAscent();
    line(0, baseY, 200, baseY);
    line(23, baseY - a, 200, baseY);
}


function draw() {
    //background(15, 0, 200);
    textFont(font);
    //fill(150, 0, 50, 30);
    //noStroke();
    noFill();
    stroke(50, 25, 100, 1.6);
    strokeWeight(5);
    strokeCap(SQUARE);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < ritual.length; i++) {
        let xPos = i*width/15+140;
        let yPos = (i/7)*height/2.5+110;
        textSize(100);
        text(ritual[i], xPos, yPos);
    }
}