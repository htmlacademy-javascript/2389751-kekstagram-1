const userPicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const gallery = document.querySelector('.pictures');

const createTemplate = ({comments, description, likes, url}) => {
  const templatePicture = userPicture.cloneNode(true);

  templatePicture.querySelector('.picture__img').src = url;
  templatePicture.querySelector('.picture__img').alt = description;
  templatePicture.querySelector('.picture__comments').textContent = comments.length;
  templatePicture.querySelector('.picture__likes').textContent = likes;

  return templatePicture;
};

export const renderGallery = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((picture) => {
    const template = createTemplate(picture);
    fragment.append(template);
  });

  gallery.append(fragment);
};
