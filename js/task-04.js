
const counterValuRef = document.querySelector('#value');

const buttonDecrementRef =  document.querySelector('[data-action="decrement"]');
const buttonIncrementRef =  document.querySelector('[data-action="increment"]');

let counterValue = 0;

buttonDecrementRef.addEventListener('click', calculationDecr);
buttonIncrementRef.addEventListener('click', calculationIncr);

function calculationDecr() {
    counterValue += 1;
    counterValuRef.textContent = counterValue;
}

function calculationIncr() {
    counterValue -= 1;
    counterValuRef.textContent = counterValue;
}