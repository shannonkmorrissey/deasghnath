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

DAY  33 / pian
START: 2026.03.23 22:24
END: 2026.03.23 23:54

google search:
- elif p5js
- greater than or equal to js syntax
- js conditional operations syntax
- js boolean operator syntax
- js while loop
- js or operator

chatgpt prompt:
- in this p5js code snippet, why does the scale(scaleSize) only appear to change visually on the canvas when placed before the for loop? 

p5js ref search:
- scale()

errors (not exhaustive):
- Uncaught SyntaxError: Unexpected token '{' (at sketch.js:67:31)
- Uncaught SyntaxError: Unexpected token ';' (at sketch.js:57:33)

summary:
- went through a bunch of flawed logic trying to get scaleSize to increase until it reached 6 and then decrease
once it reached 0. watched a coding train video and solved it within 3 minutes...lol. some days i think I'm too dumb
to do this, but I like it so much that I want to keep going even if I feel stupid. I really want to understand.
- if you want it to go backwards where it was once forward, make a variable and make the variable
positive and then make it negative when you want it to go backward.
- i just spent like 30 minutes trying to figure out why i have to put scale(scaleSize) before the for loop
and after asking chatgpt and then looking up scale() in the ref, there is a note that says
transformations reset at the beginning of the draw loop. should have gone straight to the ref!!!!


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