<a name="readme-top"></a>

## counter - JavaScript Basics project by Egidio Salinaro

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#question-about-the-project">About The Project</a>
      <ul>
        <li><a href="#bricks-built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#clapper-getting-started">Getting Started</a>
      <ul>
        <li><a href="#pencil-prerequisites">Prerequisites</a></li>
        <li><a href="#gear-implementation">Implementation</a></li>
      </ul>
    </li>
    <li><a href="#joystick-usage">Usage</a></li>
    <li><a href="#world_map-roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## :question: About The Project

<img width="400" alt="counter-egidio-salinaro" src="https://user-images.githubusercontent.com/129901135/236956535-3daee979-a717-4cde-ab81-029e8879aa40.png">

The order requires the creation of an app that functions as a counter: I decided to opt for a minimal and elegant design, using shades of black and beige/ochre colors, and eliminating the use of sharp edges.
Design is inherently responsive, UI elements are kept in the center of the window.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### :bricks: Built With

As requested, no framework was used to create this app. Sections and main functionalities are implemented through a single JavaScript file entirely designed and compiled by me.

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30"/>&nbsp;&nbsp;&nbsp; HTML5 </br>

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/>&nbsp;&nbsp;&nbsp; CSS </br>

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/>&nbsp;&nbsp;&nbsp; JAVASCRIPT </br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## :clapper: Getting Started

To begin, I created three simple .html, .css and .js files

In the .html file I created a single _div_, with the relative _id_ to then be tergetized by style and script. I left the wrapper with no content, to be able to implement it later using JavaScript, as requested.
  ```sh
    <div id="counter"></div>
  ```

### :pencil: Prerequisites

Once the style was configured in CSS, which was useful for testing functions more easily as they were being implemented, I created functions to insert all the sections I needed via JavaScript, using the DOM manipulation API, also introducing for each section the specific _id_ used in css.

* creating and naming elements in the counter
```sh
const counterBox = document.querySelector('#counter');

function createCounterElement(tagHtml, attribute, content) {
  const newElement = document.createElement(tagHtml);
  newElement.setAttribute('id', attribute);
  newElement.innerHTML = content;
  counterBox.appendChild(newElement);
}

createCounterElement('div', 'number', 0);
createCounterElement('div', 'buttons', '');
const numberZero = document.querySelector('#number');
const buttonsBox = document.querySelector('#buttons');
```
* creating and naming elements in the buttons section
```sh
function createButtonsElement(tagHtml, attribute, content) {
  const newElement = document.createElement(tagHtml);
  newElement.setAttribute('id', attribute);
  newElement.innerHTML = content;
  buttonsBox.appendChild(newElement);
}

createButtonsElement('button', 'minus', '-');
createButtonsElement('button', 'plus', '+');
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
```

### :gear: Implementation

For the counter functionality, I implemented only one function on the previously created _button_ wrapper, to practice with the use of _event delegation_. For practice purposes, I assumed to prevent the user from counting negative numbers: to do so I needed to block the functionality of the - (minus) key if the counter was zero, with a simple _if_ conditional operator.

  
 ```sh
let counter = 0;

buttonsBox.addEventListener('click', event => {
  const target = event.target;

  if (target === plusButton) {
    counter++;
  }
  if (target === minusButton && counter != 0) {
    counter--;
  }
  numberZero.innerHTML = counter;
});
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## :joystick: Usage

Color gradients and rounded corners of the buttons focus the user's attention on the only functionality of the app: use the -/+ buttons to decrease/increase the number shown on the display.

The entire HTML, CSS and JAVASCRIPT source code of the app is contained in this repository: the app can be used at https://counter-egidiosalinaro.netlify.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## :world_map: Roadmap

- [x] .html file
- [x] .css file
- [x] targeting DOM elements in .js
- [x] creating new DOM elements in .js
- [x] displaying numbers and buttons in .html via .js
- [x] calculator function with event delegation
    - [x] add
    - [x] subtract
      - [x] only if (counter =! 0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

