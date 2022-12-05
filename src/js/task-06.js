const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', inputValidation)

function inputValidation() {
  if (
    event.currentTarget.getAttribute('data-length') <=
    event.currentTarget.value.length
  ) {
    changeClass('invalid', 'valid')
  } else {
    changeClass('valid', 'invalid')
  }
}

function changeClass(inv, val) {
  event.currentTarget.classList.remove(inv)
  event.currentTarget.classList.add(val)
}