let font;

async function setup() {
    //noLoop();
    createCanvas(800, 600);
    describe(' the word "deasghnáth" in black filled text with a dark grey stroke on a light\
        grey background. each of the letters of the word change size as you move your mouse\
        on the canvas. black text above the word denotes mouse x position. black text below the word\
        denotes mouse y position.\
    ');
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');
}

function draw() {
    background(150);
    textFont(font);
    fill(0);
    stroke(100);
    strokeWeight(10);
    textAlign(CENTER, CENTER);

    for (let wordSize = 30; wordSize <80; wordSize++) {
        textSize(wordSize+mouseX/2);
        text('d', 100, height/2);
        textSize(wordSize+mouseY/2);
        text('e', 150, height/2);
        textSize(wordSize+mouseX/2);
        text('a', 200, height/2);
        textSize(wordSize+mouseY/2);
        text('s', 250, height/2);
        textSize(wordSize+mouseX/2);
        text('g', 300, height/2);
        textSize(wordSize+mouseY/2);
        text('h', 350, height/2);
        textSize(wordSize+mouseX/2);
        text('n', 400, height/2);
        textSize(wordSize+mouseY/2);
        text('á', 450, height/2);
        textSize(wordSize+mouseX/2);
        text('t', 500, height/2);
        textSize(wordSize+mouseY/2);
        text('h', 550, height/2);
    }

    // mouse x coordinate appears in the center above the word "deasghnáth" and 
    // mouse y coordinate appears in the center below the word "deasghnáth"
    textSize(20);
    fill(0);
    noStroke();
    text(`${mouseX}`, width/2, height/2-150);
    text(`${mouseY}`, width/2, height/2+150)
}