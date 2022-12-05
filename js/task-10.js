const inputEl = document.querySelector('#controls input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const createBoxes = (amount) => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    elementsToAdd.push(div)
  }
  return elementsToAdd
}

btnCreate.addEventListener('click', createObject)

function createObject() {
  let boxesToAdd = createBoxes(inputEl.value)
  boxesEl.append(...boxesToAdd)
}

btnDestroy.addEventListener('click', reset)

function reset() {
  boxesEl.innerHTML = ''
}