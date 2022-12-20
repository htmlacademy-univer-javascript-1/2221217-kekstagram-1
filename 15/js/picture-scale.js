const inputChangeScale = document.querySelector('.img-upload__scale');
const scaleValue = inputChangeScale.querySelector('.scale__control--value');
const picturePreviewContainer = document.querySelector('.img-upload__preview');
const picturePreview = picturePreviewContainer.querySelector('img');

const minScale = 25;
const maxScale = 100;
const stepScale = 25;
const defaultScale = 100;

function setScale(scale) {
  scaleValue.value = `${scale}%`;
  picturePreview.style.transform = `scale(${scale / 100})`;
}

function changeScale(evt) {
  const scaleValueInt = Number.parseInt(scaleValue.value, 10);
  const buttonChangesScale = evt.target;
  let newScaleValueInt = scaleValueInt;
  if (buttonChangesScale.matches('.scale__control--smaller')  && scaleValueInt > minScale) {
    newScaleValueInt -= stepScale;
  }
  if (buttonChangesScale.matches('.scale__control--bigger') && scaleValueInt < maxScale) {
    newScaleValueInt += stepScale;
  }
  setScale(newScaleValueInt);
}

function addEventChangesScalePictureOnForm() {
  inputChangeScale.addEventListener('click', changeScale);
  setScale(defaultScale);
}

function removeEventChangesScalePictureFromForm() {
  inputChangeScale.removeEventListener('click', changeScale);
}

export {addEventChangesScalePictureOnForm};
export {removeEventChangesScalePictureFromForm};
