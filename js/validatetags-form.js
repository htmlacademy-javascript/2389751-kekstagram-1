const HASHTAGS_COUNT = 5;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInputField = uploadForm.querySelector('.text__hashtags');
const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

let validationMessage;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateHashtag = (hashtag) => hashtagPattern.test(hashtag);

const isUniqeTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateHashtags = () => {
  if (!hashtagsInputField.value) {
    return true;
  }

  const hashtags = hashtagsInputField.value
    .toLowerCase()
    .split(' ')
    .map((item) => item.trim());

  if (hashtags.length > HASHTAGS_COUNT) {
    validationMessage = 'Максимальное количество хэш-тегов не более 5';
    return false;
  }

  const check = hashtags.every((hashtag) => {
    const isValid = validateHashtag(hashtag);
    if (!isValid) {
      validationMessage = 'Некорректное написание хэш-тега';
      return false;
    }

    const isUnique = isUniqeTags(hashtags);
    if (!isUnique) {
      validationMessage = 'Хэш-теги повторяются';
    }
    return isUnique;
  });

  return check;
};

pristine.addValidator(hashtagsInputField, validateHashtags, () => validationMessage);

export const onFormValidateHashtag = (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
};
