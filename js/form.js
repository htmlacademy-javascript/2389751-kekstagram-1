import { isHashtagsValid } from './validate-tags-form.js';

const uploadForm = document.querySelector('.img-upload__form');
const fileUploadField = uploadForm.querySelector('#upload-file');
const formOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('#upload-cancel');
const hashtagsInputField = uploadForm.querySelector('.text__hashtags');
const descriptionInputField = uploadForm.querySelector('.text__description');

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (!isHashtagsValid) {
    //console.log(true);
  }
};

const closeForm = () => {
  uploadForm.reset();
  formOverlay.classList.add('hidden');
  uploadForm.removeEventListener('submit', onFormSubmit);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
};

function onDocumentKeydown(evt) {
  const activeElement = document.activeElement;

  if (activeElement !== descriptionInputField && activeElement !== hashtagsInputField && evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
}

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeForm();
};

const openForm = () => {
  formOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  uploadForm.addEventListener('submit', onFormSubmit);
  closeButton.addEventListener('click', onCloseButtonClick);
};

fileUploadField.addEventListener('change', openForm);
