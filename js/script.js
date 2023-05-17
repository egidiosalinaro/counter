// creating main elements in the DOM
const counterContainer = document.querySelector('#counter');
const buttonsContainer = document.createElement('div');

const numberZero = document.createElement('div');
const minusButton = document.createElement('button');
const plusButton = document.createElement('button');

// nesting number display and creating relative id
counterContainer.appendChild(numberZero);
numberZero.setAttribute('id', 'number');

// nesting buttons and creating relative ids
counterContainer.appendChild(buttonsContainer);
buttonsContainer.setAttribute('id', 'buttons');

buttonsContainer.appendChild(minusButton);
minusButton.setAttribute('id', 'minus');

buttonsContainer.appendChild(plusButton);
plusButton.setAttribute('id', 'plus');

// writing objects in the document
let numbers = [
  {
    starting: 0,
  },
];

let zero = numbers.map(function (item) {
  return item.starting;
});

numberZero.innerHTML = zero.join('\n');

let buttons = [
  {
    plus: '+',
    minus: '-',
  },
];

let minor = buttons.map(function (item) {
  return item.minus;
});

let major = buttons.map(function (item) {
  return item.plus;
});

minusButton.innerHTML = minor.join('\n');
plusButton.innerHTML = major.join('\n');

// developing counter main functions
var counter = 0;

buttonsContainer.addEventListener('click', event => {
  const target = event.target;

  if (target === plusButton) {
    counter++;
  }

  if (target === minusButton && counter != 0) {
    counter--;
  }

  numberZero.innerHTML = counter;
});
