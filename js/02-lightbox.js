import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteGallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems (galleryItems);

paletteGallery.insertAdjacentHTML('beforeend', galleryMarkup);



function createGalleryItems (items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
    
};

 function onClickContainerGallery(e) {
   e.preventDefault();
   new SimpleLightbox('.gallery a',{
    captionsData: 'alt' ,
    captionDelay: 250,
   })
 };    


paletteGallery.addEventListener('click',onClickContainerGallery);