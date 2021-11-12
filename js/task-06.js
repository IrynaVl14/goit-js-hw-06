const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    inputEl.classList.add('invalid')
    const inputLength = event.currentTarget.value.length;
    const dataLength = Number(inputEl.dataset.length);
    if (inputLength === dataLength) {
     inputEl.classList.remove('invalid')
     inputEl.classList.add('valid')
    }
   
}

