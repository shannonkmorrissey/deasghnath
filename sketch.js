/*
the word "deasghnáth" with no fill and black outline is displayed across the gray canvas many times, overlapping in areas.
*/

let font;


async function setup() {
    createCanvas(800, 600);
    font = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');
}

function draw() {
    let fromColor = color(100,100,100);
    let toColor = color(0, 203, 129);
    let lerpedColor = lerpColor(fromColor, toColor, 0.5);
    background(20);
    textFont(font);
    stroke(lerpedColor);
    strokeWeight(.5);
    textSize(130);
    textAlign(CENTER, CENTER);
    fill(0);
    //noFill();

    let contours = font.textToContours('deasghnáth', width/2, height/2, {sampleFactor: 50});

    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(pt.x + 5*sin(pt.x*0.5 + millis()*.01), pt.y);
            }
            endContour(CLOSE);
        }
    endShape();

    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(pt.x + 5*sin(pt.x*0.1 + millis()*0.05), pt.y);
            }
            endContour(CLOSE);
        }
    endShape();

}