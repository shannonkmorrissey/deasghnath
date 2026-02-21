let font;
let fromColor;
let toColor;
let lerpedColor;

async function setup() {
    createCanvas(800, 600, WEBGL);
    describe();

    font = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');
}

function draw() {

    fromColor = color(100);
    toColor = color(100, 25, 129);
    lerpedColor = lerpColor(fromColor, toColor, 0.5);
    background(20);
    quad(mouseX,200,-50,100,mouseY,-100,-200,50);
    quad(mouseY,200,-50,100,mouseX,-100,-200,50);
    textFont(font);
    stroke(lerpedColor);
    strokeWeight(1);
    textSize(130);
    textAlign(CENTER, CENTER);
    fill(203, 222);

    let contours = font.textToContours('deasghnáth', 0,
        0, {sampleFactor: .5});

    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(pt.x + 2*sin(pt.x*1 + millis()*.01), pt.y, 50);
            }
            endContour(CLOSE);
        }
    endShape();
    // print(millis()*0.1); always increasing. this is why the contour
    // points appear to move

    }