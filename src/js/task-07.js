const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControl.addEventListener("input", onMouseValue);

function onMouseValue(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}