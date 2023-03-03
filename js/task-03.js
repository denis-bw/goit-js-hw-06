const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = images.map(item => {
//   const itemRef = document.createElement('li');
//   const imageRef = document.createElement('img');
//   imageRef.url = item.url;
//   imageRef.alt = item.alt;
//   itemRef.append(imageRef);

//   return itemRef;
// });


// console.log(gallery);
const ulRef = document.querySelector('.gallery')


const galleryEl = images.map(image => {
  return `<li><img class="item" src="${image.url}" alt="${image.alt}"/></li>`;
}).join("");

console.log(galleryEl);
ulRef.insertAdjacentHTML('afterbegin', galleryEl);

