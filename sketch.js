let running = true; // DO NOT DELETE
let font;
let fontSize = 160;
let xWaveValue, yWaveValue;
let wordAng = 0;
let lineAng = 0;

async function setup() {
    createCanvas(800, 600);
    background(255);
    describe('\
    ');

    // load font and set text properties
    font = await loadFont('assets/fonts/UnifrakturMaguntia-Regular.ttf');
    textSize(fontSize);
    textAlign(CENTER);
    stroke(0);
    noFill();
    strokeWeight(0.2);

    // get the points array
    points = font.textToPoints('Deasghnáth', width/2, height/2,
    { sampleFactor: 0.3 }
    );
}

function draw() {
    // draw specific variables
    let xLineJoint = width/2 + 200*sin(lineAng);
    let yLineJoint = height/2 + 200*sin(lineAng);
    lineAng += 0.3;

    //background(225);
    // initialize variables for movement
    xWaveValue = 100*cos(wordAng);
    yWaveValue = 100*sin(wordAng);
    wordAng += 0.1;

    push();
    stroke(200);
    strokeWeight(0.5);
    fill(200, 60, 180);
    //draw a square at each point, and have it move according to sin/cos
    for (let p of points) {
        ellipse(p.x + xWaveValue, p.y + yWaveValue, 10, 80);
    }
    pop();

    push();
    stroke(255);
    // draw an ellipse at each point
    for (let p of points) {
        ellipse(p.x + yWaveValue, p.y + xWaveValue, 10, 80);
    }
    pop();

}

// BUTTONS 

// saves canvas as a screenshot when button pressed
function screenshot() {
    saveCanvas('deasghnáth' + '_' + year() + month() + day() + hour() +  minute() + second(), 'png');
}

// starts and stops the sketch when button pressed
function startStop() {
    if (running) {
        noLoop();
        running = false;
    }
    else {
        loop();
        running = true;
    }
}
