let font;
let ritual =["d", "e", "a", "s", "g", "h", "n", "á", "t", "h"];

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    background(255);
    
    describe(' the letters of the word "deasghnáth" in blue outline on a \
        white background. the letters grow larger and move closer together \
        and leave a trail of the word as you move your mouse around the canvas.\
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');

}

function draw() {
    // background(15);
    textFont(font);
    fill(255, 10);
    // noStroke();
    stroke('rgba(0,50,155, 5)');
    strokeWeight(.5);
    textAlign(CENTER, CENTER);
    textSize(40+mouseY/3);

    for (let i = 0; i < ritual.length; i++) {
        textSize(mouseY/3);
        text(ritual[i], mouseX+(i*20), mouseY);
    }
}