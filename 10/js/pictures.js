import {renderBigPicture} from './big-picture.js';

const storagePictures = document.querySelector('.pictures');
const layoutPicture = document.querySelector('#picture')
.content
.querySelector('.picture');

function createPicture(pictureInformation) {
  const picture = layoutPicture.cloneNode(true);
  picture.querySelector('.picture__img').src = pictureInformation.url;
  picture.querySelector('.picture__likes').textContent = pictureInformation.likes;
  picture.querySelector('.picture__comments').textContent = pictureInformation.comments.length;
  picture.addEventListener('click', () => {
    renderBigPicture(pictureInformation);
  });
  return picture;
}

function renderPictures(picturesInformation) {
  const similarListPictureFragment = document.createDocumentFragment();
  picturesInformation.forEach((pictureInformation) => {
    let picture = createPicture(pictureInformation);
    similarListPictureFragment.appendChild(picture);
  });
  storagePictures.appendChild(similarListPictureFragment);
}

export {renderPictures};