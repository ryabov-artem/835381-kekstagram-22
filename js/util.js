'use strict';

/* Получаем случайное число */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return null;
  } else if (max < min) {
    return null;
  } else if ( max == min) {
    return null;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

/* Получаем длину строки */
const getLengthString = (string, length = '140') => (string.length <= length) ? true : false;

getLengthString();

export {getRandomNumber};