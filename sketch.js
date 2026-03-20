let font1;
let font2;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 100; // higher = slower rotation

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    
    background(200);

    describe(' \
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

    //checks if canvasAngle mod 2 is less than one. if so, draws barrel word
    //cluster. if not, draws snowflake word cluster
    if (canvasAngle % 2 < 1) {
        //background(175);
        textFont(font1);
        fill(60);
        //noFill();
        stroke(200, 20, 120, 50);
        scale(3);
        for (let wordAngle = 0; wordAngle < 1; wordAngle+=0.1) {
            model(geom1);
            rotateX(wordAngle);
            //rotateZ(wordAngle);
        }
    } else {
        //snowflake word cluster
        //background(0);
        textFont(font2);
        fill(200, 20, 120, 150);
        stroke(200, 50);
        scale(2);
        for (let wordAngle = 0; wordAngle < 3; wordAngle+=0.2) {
            model(geom2);
            rotateZ(wordAngle);
            //rotateY(wordAngle-1);
        }
    }

    //draws rows of 5x5px transparent squares with black outline 30px apart
    for (let xPos = -300; xPos < 20; xPos+=30) {
        for (let yPos = -300; yPos < 20; yPos+=30) {
            stroke(0);
            strokeWeight(1);
            //noFill();
            square(xPos, yPos, 5);
        }
    }

}

//saves canvas
function screenshot() {
    saveCanvas('deasghnáth' + '_' + year() + month() + day() + hour() +  minute() + second(), 'png');
}