const COMMENTS_PORTION_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsShowing = bigPicture.querySelector('.comments-showing');
const commentTemplate = document.querySelector('#social__comment');
const commentsLoaderButton = bigPicture.querySelector('.social__comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let showingComments = 0;
let currentPostComments;

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

const renderComments = (data) => {
  const commentsFragment = document.createDocumentFragment();
  const commentsPortion = data.slice(
    showingComments,
    showingComments + COMMENTS_PORTION_COUNT
  );

  commentsPortion.forEach((comment) =>
    commentsFragment.append(createCommentElement(comment))
  );
  commentsList.append(commentsFragment);
  showingComments += commentsPortion.length;
  commentsShowing.textContent = showingComments;

  if (showingComments === currentPostComments.length) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
};

const onPictureEscapeKeyClose = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onCommentsLoaderClick = () => {
  renderComments(currentPostComments);
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscapeKeyClose);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderClick);
  commentsLoaderButton.classList.remove('hidden');

  showingComments = 0;
  commentsList.innerHTML = '';
}

export const showBigPicture = (data) => {

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPictureEscapeKeyClose);
  closeButton.addEventListener('click', closeBigPicture);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderClick);

  renderPictureDetails(data);

  currentPostComments = data.comments;
  renderComments(currentPostComments);
  commentsCount.textContent = currentPostComments.length;
};
