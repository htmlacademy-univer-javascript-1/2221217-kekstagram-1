import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import './upload-picture-form.js';
import './picture-effect.js';

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

getData(renderPictures, loadingDataError);
