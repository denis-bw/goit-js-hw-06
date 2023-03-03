const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', (e) => {
    if (outputRef.textContent === '') {
        outputRef.textContent = "Anonymous";
    }
    else {
        outputRef.textContent = e.target.value;
    }   
});

inputRef.addEventListener('blur', () => {   
    if (outputRef.textContent !== '') {
        return;
    }
    outputRef.textContent = "Anonymous";
});