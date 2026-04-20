let running = true; // DO NOT DELETE
let font;

async function setup() {
    let cnv = createCanvas(800, 600);
    cnv.position(10, 10, 'fixed');
    // background(150);
    font = await loadFont('/assets/fonts/DynaPuff-Regular.ttf');

    xPos = new slider('x position', 1, 100, 50, 1);
    yPos = new slider('y position', 1, 300, 100, 1);
    wordSize = new slider('size', 1, 300, 100, 1);
}

function draw() {
    background(230, 150, 50, 50);
    for (let i = 0; i < 20; i++) {
        let x = xPos.value() * i;
        let y = yPos.value() * i;
        let size = wordSize.value();
        let sampleFactor = 0.5;
        let circSize = map(sin(frameCount/5), -1, 1, 3, 100);
        w = new word(x, y, size, sampleFactor, circSize);
        w.display();
    }

    xPos.display(100, 100, 100);
    yPos.display(100, 200, 100);
    wordSize.display(100, 300, 100);

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
        stroke(120, 10, 220, 30);
        strokeWeight(0.5);
        textSize(this.size);
        let points = font.textToPoints('DEASGHNÁTH', this.x, this.y, {
            sampleFactor: this.sampleFactor });
        for (let p of points) {
            circle(p.x, p.y, this.circSize);
        }
	}
}

class slider {
    constructor(nameText, min, max, val, step) {
        this.name = nameText;
        this.slider = createSlider(min, max, val, step);
    }

    display(x, y, size) {
        this.slider.position(x, y);
        this.slider.size(size);
        textSize(10);
        fill(0);
        let myText = createP(this.name);
        myText.position(x + 20, y + 20);
    }

    value() {
        return this.slider.value()
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
