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