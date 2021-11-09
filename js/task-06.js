const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {

    if (event.currentTarget.value.length<=inputEl.dataset.length) {
        return inputEl.classList.add('valid')
    }
    inputEl.classList.add('invalid')
}

