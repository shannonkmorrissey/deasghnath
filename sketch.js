let running = true; // DO NOT DELETE
let font;
let fontSize = 100;
let xWaveValue, yWaveValue;
let ang = 0;

async function setup() {
    createCanvas(800, 600);

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
    points = font.textToPoints('DEASGHNÁTH', width/2, height/2,
    { sampleFactor: 0.3 }
    );
}

function draw() {
    background(225);
    // initialize variables for movement
    xWaveValue = 20*sin(ang);
    yWaveValue = 20*cos(ang);
    ang += 0.05;

    // draw a circle at each point
    for (let p of points) {
        circle(p.x + xWaveValue, p.y + yWaveValue, 15);
    }

    for (let p of points) {
        circle(p.x, p.y, 15);
    }

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