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


// const img = images.map(
//   images => {
//     const galleryItemEl = document.createElement('li');
//     galleryItemEl.classList.add('gallery__item');

//     const imgEl = document.createElement('img');
//     imgEl.src=images.url;
//     imgEl.alt = images.alt;
            
//     galleryItemEl.appendChild(imgEl);
//     return galleryItemEl;
//   } 
// )

// const listOfImages = document.querySelector('ul.gallery');
// listOfImages.append(...img)


const makeListOfImages = ({ url, alt }) => {
  return `
    <li class="gallery__item">
        <img src="${url}" alt="${alt}">
    </li>
    `
};

const styleOfImages = () => {
  return `
  <style>
      .gallery {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.gallery__item {
  list-style: none;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  object-fit: cover;
}

img {
  display: block;
  max-height: 100%;
}

.gallery__item:nth-child(1) img {
  object-position: -20px 0px;
}
    </style>
  `
};
   

const galleryEl = document.querySelector('ul.gallery');
const listOfImages = images.map(makeListOfImages).join('');
galleryEl.insertAdjacentHTML('afterbegin', listOfImages);
document.head.insertAdjacentHTML('beforeend', styleOfImages());