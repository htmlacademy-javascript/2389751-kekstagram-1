import { showBigPicture } from './big-picture.js';
import { createGallery } from './data.js';

const userPicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const gallery = document.querySelector('.pictures');

const createPictureElement = ({ comments, description, likes, url, id }) => {
  const pictureElement = userPicture.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.id = id;

  return pictureElement;
};

const renderGallery = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((picture) => {
    const template = createPictureElement(picture);

    fragment.append(template);
  });

  gallery.append(fragment);
};

const pictures = createGallery();

gallery.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-id]');

  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.id
  );

  if (!picture) {
    return;
  }

  showBigPicture(picture);

});

renderGallery(pictures);
