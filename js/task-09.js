const buttonColorRef = document.querySelector('.change-color');
const contentColorRef = document.querySelector('.color');

buttonColorRef.addEventListener('click', changeColorBody);

function changeColorBody() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  contentColorRef.textContent = randomColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
