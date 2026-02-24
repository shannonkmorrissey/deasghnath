let font;
let running;

async function setup() {
    noLoop();
    createCanvas(800, 600);
    describe('dark grey solid background with the word deasghnáth in the center\
        in translucent hot pink bubble letters with thin white outline. the word\
        is printed over and over again, each word on top of the last, and\
        the text increases by 6 pixels in size each time, giving the illusion\
        that the text creates a 3D shape coming toward the viewer. The word \
        moves left and right according to mouse X position.'
        );
    font = await loadFont('assets/fonts/DynaPuff-Regular.ttf');
}

function draw() {
    background(50);
    textFont(font);
    stroke(200);
    strokeWeight(0.8);
    textAlign(CENTER, CENTER);
    fill('rgba(203, 21, 192, .15)');

    for (let y = 10; y <= height-400; y+=6) {
        text('deasghnáth', mouseX,height/2);
        textSize(y);
    }

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