// writing objects on document
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

const numberZero = document.querySelector('#number')
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

const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

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