let running = true;
let font1, font2;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 100; // higher = slower rotation
let r = 0;
let g = 255;
let b = 0;
let scaleSize = 1;
let scaleCounter = 0.1;

async function setup() {
    createCanvas(800, 600, WEBGL);
    
    //background(200);

    describe('a cluster of the word "deasghnáth rotating along different\
        axes in space and zooming in and out in a loop.\
    ');

    font1 = await loadFont('assets/fonts/NovaCut-Regular.ttf');
    font2 = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');

    geom1 = font1.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 2, extrude: 15});
    geom1.normalize();
    geom2 = font2.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 2, extrude: 10});
    geom2.normalize();

}

function draw() {
    background(100);
    textAlign(CENTER, CENTER);

    //updates angle I want to move the canvas according to time elapsed
    if (millis() - lastStep > stepInterval) {
        canvasAngle += PI/12;
        lastStep = millis();
    }

    //rotates axes
    //rotateX(canvasAngle);
    rotateZ(canvasAngle);
    rotateY(canvasAngle);

    textFont(font1);
    stroke(0);
    fill(r, 50, b, 50);
    strokeWeight(1);
    scale(scaleSize); // why does this have to be before the for loop in order for it to visually appear to change size?
    //because transformations like scale reset at the beginning of the draw loop. 

    for (let wordAngle = 0; wordAngle < 2; wordAngle += 0.6) {
        model(geom1);
        rotateX(wordAngle);
        r++;
        g -= 20;
        b += 10;

        if (r > 255) {
            r = 0;
            g = 255;
            b = 0;
        }
    }

    // this was a failure
    // i want scaleSize to increase until it reaches 2 and then
    //decrease until it reaches 0, over again
    // if (scaleSize === 1) {//enter conditional
    //     scaleSize += 0.001; // increment
    //     if (scaleSize === 2) {
    //         scaleSize -= 0.0001;
    //         while (scaleSize > 0 && scaleSize < 2) {
    //             scaleSize -= 0.001;
    //         }
    //     }
    // }
    //scaleSize === 1

    if (scaleSize > 6) {
        scaleCounter = -0.1;
    } else if (scaleSize < 0) {
        scaleCounter = 0.1;
    }

    scaleSize += scaleCounter;
}

// BUTTONS 

//saves canvas as a screenshot when button pressed
function screenshot() {
    saveCanvas('deasghnáth' + '_' + year() + month() + day() + hour() +  minute() + second(), 'png');
}

//starts and stops the sketch when button pressed
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