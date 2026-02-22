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

    background(20);
    quad(100,200,-50,100,mouseY,-100,-200,50);
    quad(50,200,-30,300,mouseX,-100,-300,80);
    textFont(font);
    stroke(0);
    strokeWeight(1);
    textSize(130);
    textAlign(CENTER, CENTER);
    fill('rgba(203, 21, 192, .2)');
    // font.textToContours('string', x-pos, y-pos, options)
    // converts text outlines as points in a contour array
    // won't do anything yet on the canvas, just stores the data
    let contours = font.textToContours('deasghnáth', 0,
        0, {sampleFactor: 2});
        // last parameter, options:
        // "simplifyThreshold removes collinear points if it's set to 
        // a number other than 0. The value represents the threshold 
        // angle in radians to use when determining whether two edges 
        // are collinear."

        // sampleFactor is the ratio of the text's path length to the
        // number of samples. It defaults to 0.1. Higher values produce
        // more points along the path and are more precise.

        //
    beginShape();
        for (const pts of contours) {
            beginContour();
            for (const pt of pts) {
                vertex(pt.x+50*sin(millis()*.5), pt.y+5*sin(millis()*.7));
            // vertex(
            // pt.x = original point
            // + 10 = pixel distortion amt
            // sin... = provides oscillating value bc tied to millis)
            }
            endContour(CLOSE);
        }
    endShape();
    }