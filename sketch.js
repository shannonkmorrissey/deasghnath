let font1;
let font2;
let canvasAngle = 0;
let lastStep = 0;
let stepInterval = 600; // higher = slower rotation

async function setup() {
    //noLoop();
    createCanvas(800, 600, WEBGL);
    
    describe(' A WEBGL canvas displays a rotating 3D typographic composition \
        of the word “deasghnáth.” The entire scene incrementally tilts over time, \
        producing a slow, stepped rotation around the x- and z-axes.\
        The first state shows thin wireframe like pink 3D text with repeating\
        3D forms of the word, overlapping at different angles.\
        In the second state thicker, more extruded pink 3D text with white outlines\
        forms another word cluster with many repetitions appearing at different angles.\
    ');

    font1 = await loadFont('assets/fonts/NovaCut-Regular.ttf');
    font2 = await loadFont('assets/fonts/SpaceGrotesk-SemiBold.ttf');

    geom1 = font1.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 2, extrude: 20});
    geom1.normalize();
    geom2 = font2.textToModel("deasghnáth", 0, 0, {
        sampleFactor: 5, extrude: 50});
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
    rotateX(canvasAngle);
    rotateZ(canvasAngle/2);

    //checks if canvasAngle mod 2 is less than one. if so, draws barrel word
    //cluster. if not, draws snowflake word cluster
    if (canvasAngle % 2 < 1) {
        //background(200);
        textFont(font1);
        //fill(150, 60, 200);
        noFill();
        stroke(200, 20, 120, 10);
        scale(3);
        for (let wordAngle = 0; wordAngle < 1; wordAngle+=0.1) {
            model(geom1);
            rotateX(wordAngle);
            rotateZ(wordAngle);
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
            rotateY(wordAngle-1);
        }
    }
}

//saves canvas
function screenshot() {
    saveCanvas('deasghnáth' + '_' + year() + month() + day() + hour() +  minute() + second(), 'png');
}