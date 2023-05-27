// creating and naming elements in the counter
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

// creating and naming elements in the buttons section
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

// developing counter main functions
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
