import {createGallery} from '/data.js';

const userPicture = document.querySelector('#picture').content;
const imgUser = userPicture.src;
const likesUser = userPicture.likes;
const commentstUser = userPicture.comments;
const userGalleryPictures = createGallery();

const userGalleryFragment = document.createDocumentFragment();

userGalleryPictures.forEach(({url, likes, comments}) => {
  const galleryElement = userPicture.cloneNode(true);
  imgUser.querySelector('.src').textContent = url;
  likesUser.querySelector('.picture__likes').textContent = likes;
  commentstUser.querySelector('.picture__comments').textContent = comments;
  userGalleryFragment.appendChild(galleryElement);
});

userPicture.appendChild(userGalleryFragment);
