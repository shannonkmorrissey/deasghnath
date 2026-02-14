/*
the word "deasghnáth" moves across a black background from top left to bottom right, changing fill color as it goes. the stroke color changes
according to mouse position on the canvas.
*/

let novaCut;

async function setup() {
    createCanvas(800, 600);
    novaCut = await loadFont('/assets/fonts/NovaCut-Regular.ttf');
}

function draw() {
    background(100);
    textFont(novaCut);
    fill(150, 100, 200);
    strokeWeight(4);
    stroke(map(mouseX, 0, 800, 0, 255), map(mouseY, 0, 800, 0, 255), map(mouseY, 0, 800, 0, 255));
    textSize(100);
    textAlign(CENTER, CENTER);
    // text("deasghnáth", width / 2 + sin(frameCount)*5, height /2 + cos(frameCount)*5);
    // textSize(50);
    // text("deasghnáth", width / 2 + cos(frameCount)*5, height /2 +sin(frameCount)*5);
    // textSize(50);
    // text("deasghnáth", width / 2 + cos(frameCount/5)*50, height /2 +sin(frameCount/5)*50);
    
    //noStroke();
    //noFill();

    for (let x = 0; x < 300; x+=20) {
        for (let y = 0; y < 300; y+=20) {
            text("deasghnáth", x, y);
            //print(x, y);
        }
    }


}