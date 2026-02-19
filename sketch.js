/*
the word "deasghnáth" with no fill and black outline is displayed across the gray canvas many times, overlapping in areas.
*/

let font;

async function setup() {
    createCanvas(800, 600);
    font = await loadFont('assets/fonts/Montserrat-Regular.ttf');
}

function draw() {
    background(random(0,255), random(0,255), random(0, 255), 10);
    textFont(font);
    stroke(100);
    strokeWeight(10);
    textSize(130);
    textAlign(CENTER, CENTER);
    //noFill();

    let contours = font.textToContours('deasghnáth', width/2, height/2, {sampleFactor: 0.5});

    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(mouseY + 5*sin(pt.x*0.1 + millis()*.05), mouseX);
            }
            endContour(CLOSE);
        }
    endShape();

    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(pt.x + 5*sin(pt.x*0.1 + millis()*0.01), pt.y);
            }
            endContour(CLOSE);
        }
    endShape();

    // for (let x = 0; x < width; x+=200) {
    //     for (let y = 0; y < height+200; y+=120) {
    //         text("deasghnáth", x, x);
    //         //print(x, y);
    //     }
    // }
    // for (let x = 0; x < width+100; x+=100) {
    //     for (let y = 0; y < height+200; y+=100) {
    //         text("deasghnáth", y, x);
    //         push();
    //         fill(130);
    //         square(x, y, 200);
    //         pop();
    //     }
    // }

}