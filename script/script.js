const mainTitle = document.querySelector('#title');
let currentValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  currentValue++;
  mainTitle.textContent = currentValue;
});

btnDecrement.addEventListener('click', () => {
  currentValue--;
  mainTitle.textContent = currentValue;
});

btnReset.addEventListener('click', () => {
  currentValue = 0;
  mainTitle.textContent = currentValue;
});