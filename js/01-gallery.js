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
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
    
};

 paletteGallery.addEventListener('click',onPaletteGalleryClick);

  function  onPaletteGalleryClick (e) {
    e.preventDefault();
   if (e.target.nodeName !== 'IMG'){
   return
 };

  const bigImg = basicLightbox.create(`
   <img src="${e.target.dataset.source}" 
    width="800" height="600">
    `)
    bigImg.show()

    paletteGallery.addEventListener('keyup', function (e){
      e.preventDefault();
      console.log(e.code);
     if (e.code === 'Escape'){
      bigImg.close();
     }
    });

};


  



