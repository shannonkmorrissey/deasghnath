let font;
let running;

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    describe('with the drag of the mouse, draws the word deasghnáth\
        in increasing sizes on top of each previous one.'
        );
    background('rgba(222, 10, 143, .4)');
    font = await loadFont('assets/fonts/DynaPuff-Regular.ttf');
    textOutput(LABEL);
}

function draw() {
    textFont(font);
    stroke(0, .4);
    strokeWeight(0.5);
    textAlign(CENTER, CENTER);
    fill('rgba(69, 36, 67, 0.01)');
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
    for (let y = 1; y <= height-200; y+=80) {
        text('deasghnáth', mouseX,mouseY);
        textSize(y/5);
    }
}