let running = true; // DO NOT DELETE
let font, word1;

async function setup() {
    createCanvas(800, 600);
    // background(150);
    font = await loadFont('/assets/fonts/Amarante-Regular.ttf');

}

function draw() {
    background(230, 150, 50, 20);
    for (let i = 0; i < 20; i++) {
        let x = 50 * i;
        let y = 40 * i;
        let size = 100;
        let sampleFactor = 0.2;
        let circSize = map(sin(frameCount/30), -1, 1, 3, 100);
        w = new word(x, y, size, sampleFactor, circSize);
        w.display();
    }

}

class word {
	constructor (x, y, size, sampleFactor, circSize) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.sampleFactor = sampleFactor;
        this.circSize = circSize;
	}
	
	display() {
        textAlign(CENTER, CENTER);
        textFont(font);
        noFill();
        stroke(120, 10, 220, 50);
        strokeWeight(0.5);
        textSize(this.size);
        let points = font.textToPoints('DEASGHNÁTH', this.x, this.y, {
            sampleFactor: this.sampleFactor });
        for (let p of points) {
            circle(p.x, p.y, this.circSize);
        }
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
