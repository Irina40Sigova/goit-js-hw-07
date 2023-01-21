import { galleryItems } from './gallery-items.js';
// Change code below this line

  console.log(galleryItems);


  
  const paletteGallery = document.querySelector('.gallery');
  const galleryMarkup = createGalleryItems (galleryItems);

  paletteGallery.insertAdjacentHTML('beforeend', galleryMarkup);


  paletteGallery.addEventListener('click', onSmallImageClick) ;
  
function createGalleryItems (items) {
      return items.map(({ preview, original, description }) => 
      
          `<div class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
           />
          </a>
          </div>`
      )
          .join('');
  };
  
  function onSmallImageClick(e) {
      e.preventDefault();
      console.log("Some img clicked");
      const isImg = e.target.classList.contains('gallery__image');
      if (!isImg) {
          return;
      }
  
      const urlOfBigImg = e.target.dataset.source;
      
      openModal(urlOfBigImg);
  }
  
  function openModal(url) {
      const closeModal = e => {
  if (e.code === 'Escape') { bigImg.close(); }
  };
  
      const bigImg = basicLightbox.create(`
      <img src="${url}">`,
          {
              onShow: (bigImg) =>
                  window.addEventListener('keydown', closeModal),
              onClose: (bigImg) =>
                  window.removeEventListener('keydown', closeModal)
          });
          bigImg.show();
  } ;


  




  


