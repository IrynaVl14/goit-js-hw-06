const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

inputEl.addEventListener('input', onInputChange)

function onInputChange() {   
    textEl.style.fontSize = inputEl.value+'px';
}