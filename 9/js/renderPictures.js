import {createArrayPicturesInformation} from './data.js';

const storagePictures = document.querySelector('.pictures');
const layoutPicture = document.querySelector('#picture')
.content
.querySelector('.picture');

const picturesInformation = createArrayPicturesInformation(19);

const createSimilarListPictureFragment = () => {
  const similarListPictureFragment = document.createDocumentFragment();
  picturesInformation.forEach(({url, likes, comments}) => {
    const picture = layoutPicture.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    similarListPictureFragment.appendChild(picture);
  });
  return similarListPictureFragment;
}

storagePictures.appendChild(createSimilarListPictureFragment());

export {picturesInformation};