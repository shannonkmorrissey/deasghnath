Author: Shannon Morrissey
Class: DES 512 Documentation Studio
Professor: Eric Von Haynes
UIC School of Design
Spring 2026

This sketch is an ongoing project as part of establishing and documenting a personal daily practice
in computational design. I have chosen to create a progressively evolving sketch of the Irish word "deasghnáth," which translates to "rite, ceremony; ceremonial act, formality" according to Foras na Gaeilge’s New English-Irish Dictionary (2013-2017). Through this practice, I aim to reserve a daily opportunity for myself to give  sustained effort in learning and practicing creative coding, while dedicating time to reflect and ground myself in my personal experience and thought process. There is no goal other than to simply "keep making and see what happens." By absolving myself of the pressure of achieving a certain result or meeting certain standards, I will lower the stakes and allow myself to make and learn at my own pace. Though I am doing this for nobody but myself, I am making this public to hold myself accountable. What will my sketches look like when I can do (almost) whatever I want? Where will my curiosity lead me? I hope when this practice inevitably ends, that what I have to show for it with my documentation and the work itself will be insightful, helpful, and maybe fun to look and and interact with too.

Design and Documentation Constraints:

- 800px by 600px canvas. don't change the canvas size.
- must include the text "deasghnáth" somewhere in the sketch.
- spend 20-30 minutes a day sketching, no more. wherever you end up after 30 minutes, there you are.
- for each day, note the following in this text file:
    - start time and end time of practice session
    - what you searched for help on (google, p5js reference, an llm). record exact searches where possible.
    - errors encountered in the console (not to have an exhaustive list, just to note any errors that you deem important for understanding your learning), including any solutions, workarounds, or surrenders,
    - a summary of your process, reflecting on what you like, don't like, what was invigorating, what was frustrating, what you learned, how you feel etc.
- git commit with the message being a new word in Irish (using the Foclóir Béarla-Gaeilge) that you feel is relevant (to whatever you want it to be relevant to in that moment i.e., to your mood, the sketch itself, current events, etc.).
- pick up the next day where you left off.

a note on constraints: this is a work in progress, and I may alter these constraints slightly, while keeping the essence of the project the same, as I learn along the way what I want to document and how, and what could make for a more interesting and fulfilling practice.

***********************

DAY  49 / matamaitic
START: 2026.04.22 21:52
END: 2026.04.22 23:59

google search:
- p5js function to reset canvas
- js function to refresh page
- how to change text of button based on state js
- simple html how to change text of button based on state js
- get element by id not working
- getelementbyid is not a function 
- ^ lol learned it's case sensitive. first I had getElementbyID, which didn't work, then I had getElementbyId, which also didn't work. finally figured out through google that it has to be getElementById
- moire

chatgpt prompt:
- 

claude prompt:
- 

p5js ref search:
- createP()
- shape primitives

errors (not exhaustive):
- sketch.js:16 Uncaught (in promise) ReferenceError: Cannot access 'x' before initialization
- p5.min.js:1  HEAD http://127.0.0.1:5500/assets/fonts/Roboto-Regular.ttf net::ERR_ABORTED 404 (Not Found)
- p5.min.js:1 Uncaught (in promise) NetworkError: A network error occurred.
- You have encountered a HTTP error
- sketch.js:57 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'textToPoints')
- sketch.js:27 Uncaught (in promise) ReferenceError: circleSlider is not defined
- Uncaught (in promise) ReferenceError: strokeWeightSlider is not defined
- Uncaught (in promise) ReferenceError: h is not defined
- Uncaught (in promise) ReferenceError: Cannot access 'y' before initialization
- Uncaught ReferenceError: reset is not defined
- Uncaught TypeError: document.getElementbyID is not a function
- Uncaught TypeError: document.getElementbyId is not a function

summary:
- did a ton today, i couln't stop! i lost the word for a while, spent a while debugging, and it came back!
- added more sliders.... i love them.
- added a reset canvas button (it just reloads the page)
- I'm essentially making a fun text tool and it's so exciting!!
- now i just need to figure out how to get the sliders off the p5 canvas...
- (30 min later) omg i could keep going for hours i need to stop and go to sleep

programming concepts (I just want a place to collect what I know/help build my vocabular):
- variables
- math expressions
- strings
- conditionals
- logical equivalence
- functions
- loops
- lists
- system variables
- incrementation operations
- classes
- sliders