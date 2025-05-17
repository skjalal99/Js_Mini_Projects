Project Name: Color Flipper

Description:
This is a simple web application built using HTML, CSS, and JavaScript. 
The app changes the background color of the page to a randomly generated HEX color every time the user clicks a button. 
It also displays the current color code on the screen and logs it to the browser console.

Files:
- index.html — Contains the structure of the webpage.
- style.css — Defines the visual styling of the page.
- script.js — Contains the JavaScript logic for changing the background color.

How the JavaScript Works:

1. DOMContentLoaded Event:
   The JavaScript waits until the HTML content is fully loaded before attaching any event listeners. This is done using:
   document.addEventListener('DOMContentLoaded', () => { ... });

2. getRandomHexColor Function:
   This function generates a 6-digit HEX color code by generating a random number and converting it to hexadecimal format:
   Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');

3. Button Click Handler:
   When the user clicks the button:
   - A new random color is generated
   - The background color of the page is updated
   - The color code is shown in the text on the pages
   - The color code is logged to the console for reference

How to Run:
1. Open the project folder in Visual Studio Code or your preferred editor.
2. Use Live Server or open the index.html file directly in your browser.
3. Click the "Flip Color" button to change the background color.

Technologies Used:
- HTML
- CSS
- JavaScript (ES6+)

Author: [skjalal99]
