// const ulItemEl = document.querySelector('#categories');

// console.log('Number of categories:', ulItemEl.children.length);

// console.log(ulItemEl);





//  const AllLiItemRef = document.querySelectorAll('.item');

// const contentArr = [];

// const LiItemRef = AllLiItemRef.forEach(el => {
    
//     contentArr.push(el.firstElementChild.textContent)

//     const qwe = el.lastElementChild;
// })

// console.log(contentArr);

// const a = `Category: ${} `;


const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
  console.log(`Elements: ${item.lastElementChild.children.length}`)
})