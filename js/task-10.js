const buttonCreateDivRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls');


buttonCreateDivRef.addEventListener('click', createBoxesOnClick);
buttonDestroyRef.addEventListener('click', destroyBoxes);

function createBoxesOnClick(e) {
  if (controlsRef.firstElementChild.value > 0) {
    createBoxes(controlsRef.firstElementChild.value);
  }
  return;
};

function createBoxes(amount) {
  const arrayDiv = [];
  let num = 30;
  for (let index = 0; index < amount; index++) {

      const divElement = document.createElement('div');

      divElement.style.backgroundColor = getRandomHexColor();
      divElement.style.width = `${num}px`;
      divElement.style.height = `${num}px`;

      arrayDiv.push(divElement);
      num += 10;    
  }
  boxesRef.append(...arrayDiv);
};

function destroyBoxes() {
  boxesRef.innerHTML = '';
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
