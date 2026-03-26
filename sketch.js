let running = true; // DO NOT DELETE
let font;
let fontSize = 160;
let xWaveValue, yWaveValue;
let wordAng = 0;
let lineAng = 0;

async function setup() {
    createCanvas(800, 600);
    background(0)
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
    let xLineJoint = width/2 + 300*sin(lineAng);
    let yLineJoint = height/2 + 300*sin(lineAng);
    lineAng += 0.1;

    //background(225);
    // initialize variables for movement
    xWaveValue = 20*cos(wordAng);
    yWaveValue = 20*tan(wordAng);
    wordAng += 0.001;

    push();
    stroke(100, 100, 200);
    strokeWeight(0.5);
    fill(200, 30, 180, 10);

    //draw a square at each point, and have it move according to sin/cos
    for (let p of points) {
        square(p.x + xWaveValue, p.y + yWaveValue, 25);
    }
    pop();

    push();
    stroke(200);
    // draw a square at each point
    for (let p of points) {
        rect(p.x, p.y, 40, 10);
    }
    pop();

    // draw lines
    push();
    if (mouseX > width/2) {
        stroke(0, 20);
    } else {
        stroke(255, 20);
    }
    strokeWeight(1);
    line(0, 0, xLineJoint, yLineJoint);
    line(width/2, 0, xLineJoint, yLineJoint);
    line(0, height/2, xLineJoint, yLineJoint);
    line(width, 0, xLineJoint, yLineJoint);
    line(width, height/2, xLineJoint, yLineJoint);
    line(width, height, xLineJoint, yLineJoint);
    line(width/2, height, xLineJoint, yLineJoint);
    line(0, height, xLineJoint, yLineJoint);
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