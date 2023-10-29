const MAX_HASHTAGS_COUNT = 5;
const CORRECT_HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInputField = uploadForm.querySelector('.text__hashtags');

let validationMessage;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const isHashtagValid = (tags) => CORRECT_HASHTAG_SYMBOLS.test(tags);

const validateHashtagsCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

const isTagsUniqe = (tags) => tags.length === new Set(tags).size;

const validateTags = (tags) => {
  const hashtags = tags
    .toLowerCase()
    .split(' ')
    .filter((item) => item.trim());

  const isValidCount = validateHashtagsCount(hashtags);

  if (!isValidCount) {
    validationMessage = 'Максимальное количество хэш-тегов не более 5';
  }
  const isValid = hashtags.every(isHashtagValid);

  if (!isValid) {
    validationMessage = 'Некорректное написание хэш-тега';
  }
  const isUnique = isTagsUniqe(hashtags);

  if (!isUnique) {
    validationMessage = 'Хэш-теги повторяются';
  }
  return isValidCount && isValid && isUnique;
};

pristine.addValidator(hashtagsInputField, validateTags, () => validationMessage);

export const onFormValidateTags = (evt) => {
  validateTags();

  if (!pristine.validate()) {
    evt.preventDefault();
  }
};
