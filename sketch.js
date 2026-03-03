let font;

async function setup() {
    //noLoop();
    background(150);
    createCanvas(800, 600);
    describe(' the letters of the word "deasghnáth" in white outline on a \
        black background. the letters grow larger and move closer together \
        across the canvas to the right as you move your mouse down the canvas. \
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');
}

function draw() {
    background(15);
    textFont(font);
    noFill();
    stroke(100);
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    textSize(40+mouseY/3);
    text('D', mouseY+30, height/2);
    textSize(40+mouseY/3);
    text('E', mouseY+50, height/2);
    textSize(40+mouseY/3);
    text('A', mouseY+70, height/2);
    textSize(40+mouseY/3);
    text('S', mouseY+90, height/2);
    textSize(40+mouseY/3);
    text('G', mouseY+110, height/2);
    textSize(40+mouseY/3);
    text('H', mouseY+130, height/2);
    textSize(40+mouseY/3);
    text('N', mouseY+150, height/2);
    textSize(40+mouseY/3);
    text('Á', mouseY+170, height/2);
    textSize(40+mouseY/3);
    text('T', mouseY+190, height/2);
    textSize(40+mouseY/3);
    text('H', mouseY+210, height/2);
}