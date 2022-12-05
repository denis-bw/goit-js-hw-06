let counterValue = 0

const refs = {
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
}

refs.incrementEl.addEventListener('click', addOnValueButtonsClick)
refs.decrementEl.addEventListener('click', minusValueButtonsClick)

function addOnValueButtonsClick() {
  counterValue++
  refs.valueEl.innerHTML = counterValue
}

function minusValueButtonsClick() {
  counterValue--
  refs.valueEl.innerHTML = counterValue
}