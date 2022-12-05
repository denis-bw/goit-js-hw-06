const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients)


const ingredientsEl = document.querySelector('#ingredients')

const elements = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;
  return liEl;
})

console.log(elements)

ingredientsEl.append(...elements)