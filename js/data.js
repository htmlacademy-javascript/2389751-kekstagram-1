import {getRandomInteger, getRandomArrayElement} from './utils.js';

const NAMES = [
  'Иван',
  'Олег',
  'Анастасия',
  'Александр',
  'Ольга',
  'Екатерина',
  'Мария',
  'Николай',
  'Виктор',
  'Станислав',
  'Кирилл',
  'Егор',
  'Михаил'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Фото на память',
  'Такие дела',
  'И такое бывает',
  'Вам и не снилось',
  'Не надо завидовать',
  'Попробуйте и вы',
  'Все пошло не по плану'
];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${id}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, 25) }, (_, i) => createComment(i + 1)),
});

const createGallery = (num) => Array.from({ length: num }, (_, i) => createPhoto(i + 1));

export {createGallery};
