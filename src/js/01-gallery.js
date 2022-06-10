import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const galleryItem = galleryItems.map(({preview, original, description}) => 
    `<li>
<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`)
        .join("");
    
gallery.insertAdjacentHTML("beforeend", galleryItem);


let galleryEl = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
});
