function getRandomInt(min, max) {
    if (min > max || min < 0 || max < 0) {
        throw "некоректные аргументы "
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function checkingStringLenght(checkingString, maxLenght) {
    return checkingString.length <= maxLenght;
}