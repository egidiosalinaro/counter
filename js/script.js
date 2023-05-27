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
createCounterElement('button', 'minus', '-');
createCounterElement('button', 'plus', '+');

const numberZero = document.querySelector('#number');
const buttonsBox = document.querySelector('#buttons');
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');

// moving buttons in the buttonsBox
buttonsBox.appendChild(minusButton);
buttonsBox.appendChild(plusButton);

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
