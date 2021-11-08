const categories = document.querySelector('ul#categories');
const numberOfCategories = categories.children.length;
console.log("Number of categories:",numberOfCategories );


const firstChildCategoryTitle = categories.firstElementChild.querySelector('h2').textContent;
console.log('Category: ', firstChildCategoryTitle);
const elementsOfFirstChildCategory = categories.firstElementChild.querySelectorAll('li').length;
console.log('Elements: ', elementsOfFirstChildCategory);

const secondChildCategoryTitle = categories.children[1].querySelector('h2').textContent;
console.log('Category: ', secondChildCategoryTitle);
const elementsOfSecondChildCategory = categories.children[1].querySelectorAll('li').length;
console.log('Elements: ', elementsOfSecondChildCategory);

const thirdChildCategoryTitle = categories.lastElementChild.querySelector('h2').textContent;
console.log('Category: ', thirdChildCategoryTitle);
const elementsOfThirdChildCategory = categories.lastElementChild.querySelectorAll('li').length;
console.log('Elements: ', elementsOfThirdChildCategory);