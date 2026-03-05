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
}

function draw() {
    //background(15, 0, 200);
    textFont(font);
    fill(150, 0, 50, 30);
    //noStroke();
    stroke(50, 25, 100, 20);
    strokeWeight(2);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < ritual.length; i++) {
        let xPos = width/2 +(i*sin(millis()/1000));
        let yPos = height/2 +(i*cos(millis()/1000));
        textSize(900);
        text(ritual[i], xPos, yPos);
        print(xPos, yPos);
        print(i);
    }
}