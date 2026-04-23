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

DAY  50 / grian
START: 2026.04.23 10:54
END: 2026.04.23 11:58

google search:
- css id naming conventions
- css id vs class
- p5 2d primitives
- does transparent background only work in webgl p5js
- does alpha value in background only work in webgl p5js

chatgpt prompt:
- 

claude prompt:
- 

p5js ref search:
- 

errors (not exhaustive):
- Uncaught (in promise) ReferenceError: fixed is not defined
- Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'position')
- Uncaught (in promise) TypeError: xPosSlider.display is not a function
- Uncaught SyntaxError: missing ) after argument list (at sketch.js:70:17)

summary:
- refined the tool! it feels like an actual tool. i struggled a bit with the 
position of the sliders (html/css) and still haven't figured out how to display the 
slider values with the slider label text. the way it was before i had it display as part of the 
class display function, but then bc the display was in draw, it would just 
draw over the previous value every time i changed it. but if i put it in setup, then
the value never changes. i think i can do it if i put the labels in the html
file and connect the value somehow that's in the js file... idk. just intuition.
i will try to figure it out. it's not perfect, but it's functional! and I feel like
I've come a really long way after 50 sessions.
- when I think about everything that can be done with creative coding, i get 
overwhelmed and feel helpless because there's so much. but when i just compare
myself to where I was yesterday and the day before, etc, I'm elated. I think this 
learning journey, for me, has been neither faster nor slower than I expected.
- I find it both fascinating and unsurprising that I created a tool. Fascinating because it wasn't my intention.
I didnt set out to do this. This came out of the process and a desire to experiment. Unsurprising because I have a proclivity toward organization and control.
With these sketches, I gravitated toward more efficient methods of testing, responding, and ultimately controling the output.
-  This causing me to reflect on the nature of digital creative tools.
In tools like illustrator etc., your options for creation are limited to what the tools' affordances.
- If you make your own tools, you have much more freedom. But even with code, there are limitations (beyond my understanding of CS at this point).
- I hope to continue this practice of spending time programming just to program and see what happens. 

slán go fóill.

<3 shannon

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