// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galeryList = document.querySelector('.gallery');
//galeryList.addEventListener("click", callback);

//console.log(galeryList);

function galeryImagesPreviewHtml(elements) {
  return elements
    .map(
      element =>
        `  <li class="gallery__item">
                <a class="gallery__link" href=${element.original}>
                    <img
                    class="gallery__image"
                    src=${element.preview}
                    alt=${element.description}
                    />
                </a>
            </li>`
    )
    .join('');
}

//const galeryPreviewHtml = galeryImagesPreviewHtml(galleryItems);
galeryList.innerHTML = galeryImagesPreviewHtml(galleryItems);

new SimpleLightbox('.gallery a', {
  //  captionType: "alt",
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
