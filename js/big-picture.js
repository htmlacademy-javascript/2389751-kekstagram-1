const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const onPictureKeydownClose = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureKeydownClose);
  commentsList.innerHTML = '';
}

const createCommentElement = ({avatar, message, name}) => {
  const element = commentTemplate.content.cloneNode(true);

  element.querySelector('.social__picture').src = avatar;
  element.querySelector('.social__picture').alt = name;
  element.querySelector('.social__text').textContent = message;

  return element;
};

const renderComments = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const comment = createCommentElement(item);

    fragment.append(comment);
  });

  commentsList.append(fragment);
};

export const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPictureKeydownClose);
  closeButton.addEventListener('click', closeBigPicture);

  renderPictureDetails(data);
  renderComments(data.comments);
};
