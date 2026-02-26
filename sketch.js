let font;
let running;

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    describe('with the drag of the mouse, draws the word deasghnáth\
        in increasing sizes on top of each previous one.'
        );
    background('rgba(222, 10, 143, .7)');
    font = await loadFont('assets/fonts/DynaPuff-Regular.ttf');
}

function draw() {
    textFont(font);
    stroke(0);
    strokeWeight(0.5);
    textAlign(CENTER, CENTER);
    //fill('rgb(69, 36, 67)');
    noFill();
}

// toggles sketch on and off
function toggleSketch(){
    running = !running;

    if (running) {
        loop();
    } else {
        noLoop();
    }
}

// draws the word deasghnáth in increasing sizes on top of each 
// previous one. position on the canvas is tied to the user's mouse.
function mouseDragged() {
    let wordSize = 40;
    textSize(wordSize);
    text('deasghnáth', mouseY, mouseX);
    wordSize+=5;
    }