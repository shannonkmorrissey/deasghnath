let running = true; // DO NOT DELETE
let font, x, y, size, sampleFactor, ptSize;
let myWord;

async function setup() {
    // fixed settings
    let cnv = createCanvas(800, 600);
    cnv.position(10, 10, 'fixed');
    colorMode(HSB);

    // mutable settings
    // background(150);
    dynaPuff = await loadFont('/assets/fonts/DynaPuff-Regular.ttf');
    spaceG = await loadFont('/assets/fonts/SpaceGrotesk-SemiBold.ttf');

    // create slider instances
    xPosSlider = new slider('x position', (-width/2), (width + width/2), width/2, 1);
    yPosSlider = new slider('y position', (-height/2), (height + height/2), height/2, 1);
    wordSizeSlider = new slider('text size', 1, 1000, 100, 1);
    ptSizeSlider = new slider('point size', 1, 300, 50, 1);
    sampFacSlider = new slider('sample factor', 0.05, 3, 0.5, 0.05);
    strokeHSlider = new slider('stroke hue', 0, 360, 0, 1);
    strokeWeightSlider = new slider('stroke weight', 0.1, 10, 1, 0.1);

    // display sliders
    let sliderY = 20; // sliders starting position
    let sliderSpacing = 60;
    xPosSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    yPosSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    wordSizeSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    ptSizeSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    sampFacSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    strokeHSlider.display(100, sliderY, 100);
    sliderY += sliderSpacing;
    strokeWeightSlider.display(100, sliderY, 100);

    myWord = promptUser();
}   

function draw() {
    background(0, 0, 80, 10);
    // clear();
    // set variables as slider values
    x = xPosSlider.value();
    y = yPosSlider.value();
    size = wordSizeSlider.value();
    sampleFactor = sampFacSlider.value();
    ptSize = ptSizeSlider.value();
    h = strokeHSlider.value();
    weight = strokeWeightSlider.value();

    // create word instance and display word
    push();
    textAlign(CENTER, CENTER);
    stroke(h, 100, 100, 20);
    strokeWeight(weight);
    noFill();
    w = new word(myWord);
    w.display(x, y, size, sampleFactor, ptSize);
    pop();
}

// CUSTOM FUNCTIONS
function promptUser() {
    const userWord = prompt("Enter a word");
    return(userWord);
}

// CLASSES

class word {
	constructor (word) {
        this.word = word;
	}
	
	display(x, y, size, sampleFactor, ptSize) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.sampleFactor = sampleFactor;
        this.ptSize = ptSize;
        textFont(dynaPuff);
        textSize(this.size);
        let points = dynaPuff.textToPoints(this.word, this.x, this.y, {
            sampleFactor: this.sampleFactor });
        for (let p of points) {
            circle(p.x, p.y, this.ptSize);
        }
	}
}

class slider {
    constructor(nameText, min, max, val, step) {
        this.name = nameText;
        this.slider = createSlider(min, max, val, step);
    }

    display(x, y, size) {
        this.slider.position(windowWidth - 150 , y, 'fixed');
        this.slider.size(size);
        textSize(12);
        fill(0);
        textAlign(RIGHT);
        textFont(spaceG);
        let sliderLabel = createP(this.name + ": " + this.slider.value());
        sliderLabel.position(windowWidth - 150, y + 20);
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
    const btn = document.getElementById("toggleBtn");
    if (running) {
        noLoop();
        btn.innerText = "Play"
        running = false;
    }
    else {
        loop();
        btn.innerText = "Pause"
        running = true;
    }
}

// resets canvas
function reset() {
   location.reload();
}
