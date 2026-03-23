let running = true;
let font1, font2;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 100; // higher = slower rotation
let r = 0;
let g = 255;
let b = 0;
let scaleSize = 1;

async function setup() {
    createCanvas(800, 600, WEBGL);
    
    background(200);

    describe('\
    ');

    font1 = await loadFont('assets/fonts/NovaCut-Regular.ttf');
    font2 = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');

    geom1 = font1.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 10});
    geom1.normalize();
    geom2 = font2.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 10});
    geom2.normalize();

}

function draw() {
    //background(100);
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
    fill(r);
    stroke(r, 0, b, 50);
    scale(scaleSize);

    for (let wordAngle = 0; wordAngle < 1; wordAngle += 0.1) {
        model(geom1);
        rotateX(wordAngle);
        r++;
        g -= 20;
        b += 10;
        scaleSize += 0.001;

        if (r > 255) {
            r = 0;
            g = 255;
            b = 0;
        }

        if (scaleSize > 2) {
            scaleSize -= 0.001;
        }

        //CODE BREAKS HERE AND I DON'T KNOW WHY
        // if (scaleSize = 0) {
        //     scaleSize += 0.001;
        // }
    }
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