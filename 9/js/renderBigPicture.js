import {picturesInformation} from './renderPictures.js';

const littlePictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const buttonHideBigPicture = bigPicture.querySelector('.big-picture__cancel')

const addPictureClickHandler = function (picture, pictureInformation) {
    picture.addEventListener('click', function () {
        bigPicture.querySelector('img').src = pictureInformation.url;
        bigPicture.querySelector('.likes-count').textContent = pictureInformation.likes;
        bigPicture.querySelector('.comments-count').textContent = pictureInformation.comments.length;
        bigPicture.querySelector('.social__caption').textContent = pictureInformation.description;
        bigPicture.querySelector('.social__comment-count').classList.add('hidden');
        bigPicture.querySelector('.comments-loader').classList.add('hidden');
        body.classList.add('modal-open');
        bigPicture.classList.remove('hidden');
    });
};

for (let i = 0; i < littlePictures.length; i++) {
    addPictureClickHandler(littlePictures[i], picturesInformation[i]);
  }

buttonHideBigPicture.addEventListener('click', function () {
    bigPicture.classList.add('hidden');
});
  
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        bigPicture.classList.add('hidden');
    }
});