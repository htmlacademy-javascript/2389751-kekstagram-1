import { showBigPicture } from './big-picture.js';

const userPicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const gallery = document.querySelector('.pictures');

const createTemplatePicture = ({comments, description, likes, url, id}) => {
  const templatePicture = userPicture.cloneNode(true);

  templatePicture.querySelector('.picture__img').src = url;
  templatePicture.querySelector('.picture__img').alt = description;
  templatePicture.querySelector('.picture__comments').textContent = comments.length;
  templatePicture.querySelector('.picture__likes').textContent = likes;
  templatePicture.dataset.templatePictureId = id;

  return templatePicture;
};

export const renderGallery = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach ((picture) => {
    const template = createTemplatePicture(picture);
    fragment.append(template);
  });

  gallery.append(fragment);
};

export const showGallery = (pictures) => {
  gallery.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('data-template-picture-id');
    if(!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.templatePictureId
    );
    showBigPicture(picture);
  });

};
