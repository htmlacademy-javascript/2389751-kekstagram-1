const COMMENTS_PORTION_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#social__comment');
const commentsLoaderButton = bigPicture.querySelector('.social__comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let commentsShown = 0;
let commentsContainer = [];

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const createCommentElement = ({avatar, message, name}) => {
  const element = commentTemplate.content.cloneNode(true);

  element.querySelector('.social__picture').src = avatar;
  element.querySelector('.social__picture').alt = name;
  element.querySelector('.social__text').textContent = message;

  return element;
};

const renderComments = () => {
  commentsShown += COMMENTS_PORTION_COUNT;

  if (commentsShown >= commentsContainer.length) {
    commentsLoaderButton.classList.add('hidden');
    commentsShown = commentsContainer.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createCommentElement(commentsContainer[i]);
    fragment.append(commentElement);
  }
  commentsList.replaceChildren(fragment);
  commentCount.innerHTML = `${commentsShown} из <span></span> комментариев`;
  commentCount.querySelector('span').textContent = commentsContainer.length;
};

const onCommentsLoaderClick = () => {
  renderComments(commentsContainer);
};

const onPictureKeydownClose = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureKeydownClose);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderClick);
  commentsList.innerHTML = '';
  commentCount.innerHTML = '';
  commentsShown = 0;
}

export const showBigPicture = (data) => {

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPictureKeydownClose);
  closeButton.addEventListener('click', closeBigPicture);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderClick);

  renderPictureDetails(data);
  commentsContainer = data.comments;

  if (commentsContainer.length > 0) {
    renderComments();
  }
};
