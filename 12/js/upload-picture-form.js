import {addEventValidateOnForm} from './validation-upload-picture-form.js';
import {removeEventValidateFromForm} from './validation-upload-picture-form.js';
import {addEventChangesScalePictureOnForm} from './picture-scale.js';
import {removeEventChangesScalePictureFromForm} from './picture-scale.js';
import {addEventSettingEffectsOnForm, removeEventSettingEffectsFromForm} from './picture-effect.js';
export {removeEventSettingEffectsFromForm} from './picture-effect.js';

const inputUploadPicture  = document.querySelector('#upload-file');
const initialValueInputUploadPicture = inputUploadPicture.getAttribute('value');
const formRedactionLoadedPicture = document.querySelector('.img-upload__overlay');
const buttonHideFormLoadedPicture = document.querySelector('.img-upload__cancel');
const inputTextHashtags = document.querySelector('.text__hashtags');
const textareaTextDescription = document.querySelector('.text__description');
const body = document.querySelector('body');

function removeEventListenersFromForm() {
  buttonHideFormLoadedPicture.removeEventListener('click', hideFormLoadedPicture);
  document.removeEventListener('keydown', escHideFormLoadedPicture);
  removeEventValidateFromForm();
  removeEventChangesScalePictureFromForm();
  removeEventSettingEffectsFromForm();
}

function resetInputValue() {
  inputUploadPicture.value = initialValueInputUploadPicture;
  inputTextHashtags.value = '';
  textareaTextDescription.value = '';
}

function hideFormLoadedPicture() {
  formRedactionLoadedPicture.classList.add('hidden');
  body.classList.remove('modal-open');removeEventListenersFromForm();
  resetInputValue();
}

function escHideFormLoadedPicture(evt) {
  const activeElement = document.activeElement;
  if (evt.key === 'Escape' && activeElement !== inputTextHashtags && activeElement !== textareaTextDescription) {
    hideFormLoadedPicture();
  }
}

function addEventListenersToForm() {
  buttonHideFormLoadedPicture.addEventListener('click', hideFormLoadedPicture);
  document.addEventListener('keydown', escHideFormLoadedPicture);
  addEventValidateOnForm();
  addEventChangesScalePictureOnForm();
  addEventSettingEffectsOnForm();
}

function renderFormLoadedPicture() {
  formRedactionLoadedPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  addEventListenersToForm();
}

inputUploadPicture.addEventListener('change', renderFormLoadedPicture);
