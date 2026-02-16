/*
the word "deasghnáth" with no fill and black outline is displayed across the gray canvas many times, overlapping in areas.
*/

let novaCut;

async function setup() {
    createCanvas(800, 600);
    novaCut = await loadFont("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nova+Cut&display=swap");
}

function draw() {
    background(100, 0, 250);
    textFont(novaCut);
    stroke(150);
    strokeWeight(1);
    textSize(random(148,150));
    textAlign(CENTER, CENTER);
    noFill();

    for (let x = 0; x < width; x+=200) {
        for (let y = 0; y < height+200; y+=120) {
            text("deasghnáth", x, x);
            //print(x, y);
        }
    }
    for (let x = 0; x < width+100; x+=100) {
        for (let y = 0; y < height+200; y+=100) {
            text("deasghnáth", y, x);
            push();
            fill(130);
            square(x, y, 200);
            pop();
        }
    }

}