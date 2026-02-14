/*
the word "deasghnáth" with no fill and black outline is displayed across the gray canvas many times, overlapping in areas.
*/

let novaCut;

async function setup() {
    createCanvas(800, 600);
    novaCut = await loadFont("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nova+Cut&display=swap");
}

function draw() {
    background(100);
    textFont(novaCut);
    fill(0);
    stroke(0);
    strokeWeight(4);
    textSize(100);
    textAlign(CENTER, CENTER);
    
    noFill();

    for (let x = 0; x < width; x+=200) {
        for (let y = 0; y < height; y+=120) {
            text("deasghnáth", x, y);
            //print(x, y);
        }
    }

}