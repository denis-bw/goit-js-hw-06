const inputRef = document.querySelector('#validation-input')

const valueDataAtribute = inputRef.dataset.length;


inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length >= valueDataAtribute) {
       examination('invalid', 'valid')
    }
    else {
        examination('valid', 'invalid')
    }
});

function examination(a, b) {
    event.currentTarget.classList.remove(a)
    event.currentTarget.classList.add(b)
};  