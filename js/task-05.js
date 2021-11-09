const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value!=='') {
      return  nameOutput.textContent = event.currentTarget.value;
    }
    return nameOutput.textContent = 'Anonymous';
}
