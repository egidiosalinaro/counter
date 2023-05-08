// targeting elements from the DOM
const numberZero = document.querySelector('#number')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

// writing objects on the document
let numbers = [
  {
    starting: 0
  },
];

let zero = numbers.map(function(item) {
  return (
      item.starting
    );
})

numberZero.innerHTML = zero.join('\n');

let buttons = [
  {
    plus: '+',
    minus: '-'
  },
];

let minor = buttons.map(function(item) {
  return (
    item.minus
  )
})

let major = buttons.map(function(item) {
  return (
    item.plus
  );
})

minusButton.innerHTML = minor.join('\n');
plusButton.innerHTML = major.join('\n');

// counter main functions
var counter = 0;

plusButton.onclick = function add(){
  counter++;
  document.querySelector('#number').innerHTML = counter
}

minusButton.onclick = function subtract(){
  if (counter != 0) {
    counter--;
  }
  document.querySelector('#number').innerHTML = counter
}