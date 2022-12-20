const body = document.querySelector('body');

function loadingDataError() {
  const templateMessageLoadingDataError = document.querySelector('#error').content.querySelector('section');
  const messageLoadingDataError = templateMessageLoadingDataError.cloneNode(true);
  messageLoadingDataError.querySelector('h2').textContent = 'Ошибка загрузки данных';
  messageLoadingDataError.querySelector('button').remove();
  body.append(messageLoadingDataError);
  setTimeout(() => {
    body.removeChild(messageLoadingDataError);
  }, 5000);
}

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElements(elements, count)  {
  const newArray = [];
  while (newArray.length < count) {
    const newElement = elements[getRandomPositiveInteger(0, elements.length - 1)];
    if (!newArray.includes(newElement)) {
      newArray.push(newElement);
    }
  }
  return newArray;
}

function pictureInformationSortingMethod(pictureInformation1, pictureInformation2) {
  return pictureInformation2.comments.length - pictureInformation1.comments.length;
}

function getSortedPictureInformation(pictureInformation) {
  return pictureInformation.slice().sort(pictureInformationSortingMethod);
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {loadingDataError, getRandomArrayElements, getSortedPictureInformation, debounce};
