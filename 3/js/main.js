function getRandomIn(min, max) {
    if (min > max || min < 0 || max < 0) {
        return null;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// https://myrusakov.ru/js-random-numbers.html

function checkingStringLenght(checkingString, maxLenght) {
    return checkingString.length <= maxLenght;
}