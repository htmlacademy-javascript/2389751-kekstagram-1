const formUpload = document.querySelector('.img-upload__form');
const fileUploadField = formUpload.querySelector('#upload-file');
const formOverlay = formUpload.querySelector('.img-upload__overlay');
const closeButton = formUpload.querySelector('#upload-cancel');
const hashtagsInputField = formUpload.querySelector('.text__hashtags');
const descriptionInputField = formUpload.querySelector('.text__description');

const closeForm = () => {

  formUpload.reset();
  formOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyClose);
};

function onFormEscapeKeyClose(evt) {
  if (evt.key === 'Escape') {
    closeForm();
  }
}

const onInputEscapeKeyIgnore = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeForm();
  hashtagsInputField.removeEventListener('keydown', onInputEscapeKeyIgnore);
  descriptionInputField.removeEventListener('keydown', onInputEscapeKeyIgnore);
};

const openForm = () => {

  formOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeyClose);
  hashtagsInputField.addEventListener('keydown', onInputEscapeKeyIgnore);
  descriptionInputField.addEventListener('keydown', onInputEscapeKeyIgnore);
  closeButton.addEventListener('click', onCloseButtonClick);
};

fileUploadField.addEventListener('change', () => openForm(formOverlay));
