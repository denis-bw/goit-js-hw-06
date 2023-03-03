const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ArrItem = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');

  return itemRef;
})

const ulRef = document.querySelector('#ingredients');

ulRef.append(...ArrItem);

