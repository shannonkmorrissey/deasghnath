let font;

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    describe('the word "deasghnáth" with no color fill and a transluscent gray\
    outline in the center of the canvas printed many times one on top\
    of each other, getting larger with each successive occurrence so as\
    to give the appearance of 3D movement toward the viewer. \
    small text in the upper left corner displays the mouse x and y\
    position as the mouse is moved across the canvas'
    );
    font = await loadFont('assets/fonts/DynaPuff-Regular.ttf');
}

function draw() {
    // the word "deasghnáth" with no color fill and a transluscent gray
    // outline in the center of the canvas printed many times one on top
    // of each other, getting larger with each successive occurrence so as
    // to give the appearance of 3D movement toward the viewer.
    background(150);
    textFont(font);
    stroke(0,0,0,5);
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    noFill();
    for (let wordSize = 100; wordSize <140; wordSize++) {
        textSize(wordSize);
        text('deasghnáth', width/2, height/2);
    }
    // small text in the upper left corner displays the mouse's x and y position as
    // the mouse is moved across the canvas
    textSize(10);
    fill(0);
    noStroke();
    text(`${mouseX}, ${mouseY}`, 80, 20);
}