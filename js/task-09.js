const widgetEl = document.querySelector('.widget');
const textEl = document.querySelector('span.color');

widgetEl.addEventListener('click', onColorChangeClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onColorChangeClick() {  
  textEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = textEl.textContent;
}