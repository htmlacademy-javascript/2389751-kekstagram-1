import { createComment } from '/data.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');
const body = bigPicture.querySelector('body');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-count');

const onCloseButtonClick = (evt) => {
  if (evt === 'Escape' || evt === 'click') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsLoader.classList.remove('hidden');
    commentsCount.classList.remove('hidden');
    document.removeEventListener('keydown');
  }
};

export const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
  closeButton.addEventListener('keydown', 'click', onCloseButtonClick);

  
};
