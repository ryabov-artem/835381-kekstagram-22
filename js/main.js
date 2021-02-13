'use strict';

const random = function (min, max) {
  // В случае, если минимальное число больше максимального, появится ошибка.
  if (min > max) {
    return 'Что-то пошло не так :('
  }
  // Честно украдено с источника (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
random(1, 20)

const length = function (str, maxLength) {
  return str.length <= maxLength;
}
length(12, 140)

// Задание 3
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
];
const randomNameIndex = _.random(0, NAMES.length - 1);
let id = random(1, 15);
let url = 'photos/' + random(1, 15) + '.jpg';
let description = 'Супер крутое описание фотографии';
let likes = random(15, 100);
let comments = [
  {
    id: random(1, 200),
    avatar: 'img/avatar-' + random(1, 6) + '.svg',
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: NAMES[randomNameIndex],
  },
  {
    id: random(1, 200),
    avatar: 'img/avatar-' + random(1, 6) + '.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: NAMES[randomNameIndex],
  },
  {
    id: random(1, 200),
    avatar: 'img/avatar-' + random(1, 6) + '.svg',
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: NAMES[randomNameIndex],
  },
  {
    id: random(1, 200),
    avatar: 'img/avatar-' + random(1, 6) + '.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: NAMES[randomNameIndex],
  },
];

const photoData = () => {
  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments
  };
};

console.log(photoData())