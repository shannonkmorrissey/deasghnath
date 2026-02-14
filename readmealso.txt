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

DAY  5 / grá
START: 2026.02.14 16:43
END: 2026.02.14 17:15

google search: 
-access to fetch at ... from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https,
- uncaught in promise meaning


p5js ref search:
- loadFont()


errors (not exhaustive):
- Access to fetch at 'file:///assets/fonts/NovaCut-Regular.ttf' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.Understand this error
/assets/fonts/NovaCut-Regular.ttf:1  Failed to load resource: net::ERR_FAILEDUnderstand this error
index.html:1 Access to fetch at 'file:///assets/fonts/NovaCut-Regular.ttf' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.Understand this error
/assets/fonts/NovaCut-Regular.ttf:1  Failed to load resource: net::ERR_FAILEDUnderstand this error
p5.min.js:1   Uncaught (in promise) TypeError: Failed to fetch
-Uncaught (in promise) NetworkError: A network error occurred.
-HEAD http://127.0.0.1:5500/assets/fonts/NovaCut-Regular.ttf net::ERR_ABORTED 404 (Not Found)
-You have encountered a HTTP error
-p5.min.js:1 WARN: No glyph data for 'NovaCut-Regular', retrying as FontFace

summary:
-for some reason the font wouldn't load and the sketch was blank when i opened it today. spent the first 15 minutes debugging looking into errors. based on my research I thought it might have something to do with the file path, but it looked correct to me. since it's a google font and i saw you could load the font via linking it, i did that instead and it worked. spent the rest of the time playing around with the for loop steps until i arrived at something that was satisfactory to me and visually interesting.

i also figured out how to turn off ai inline suggestions. it was suggesting code for every line i wrote, and while helpful especially because I'm learning, i want to think for myself. maybe it's helpful for speed for people who know what they're doing, but i think it was interfering too much with my thought process.