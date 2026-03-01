let font;
let r = 0;
let g = 0;
let b = 0;


async function setup() {
    //noLoop();
    createCanvas(800, 600);
    background(150);
    describe('the word "deasghnáth" with no color fill and a transluscent gray\
    outline in the center of the canvas printed many times one on top\
    of each other, getting larger with each successive occurrence so as\
    to give the appearance of 3D movement toward the viewer. \
    small text in the upper left corner displays the mouse x and y\
    position as the mouse is moved across the canvas'
    );
    font = await loadFont('assets/fonts/Amarante-Regular.ttf');
}

function draw() {
    // 

    textFont(font);
    stroke(0,0,0,5);
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    noFill();
    for (let wordSize = 100; wordSize <140; wordSize++) {
        textSize(wordSize);
        fill(r, g, b);
        text('deasghnáth', width/2, height/2);
        r+=10;
        g+=5;
        b+=5;
        //print(r, g, b);
        //print(wordSize);
    }
    // mouse x coordinate appears in the center above the word "deasghnáth" and 
    // mouse y coordinate appears in the center below the word "deasghnáth"
    textSize(20);
    fill(0);
    noStroke();
    text(`${mouseX}`, width/2, height/2-150);
    text(`${mouseY}`, width/2, height/2+150)
}