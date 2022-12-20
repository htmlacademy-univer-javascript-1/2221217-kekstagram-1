import {validateTheForm} from './validation-upload-picture-form.js';
import {addEventChangesScalePictureOnForm} from './picture-scale.js';
import {removeEventChangesScalePictureFromForm} from './picture-scale.js';
import {addEventSettingEffectsOnForm, removeEventSettingEffectsFromForm} from './picture-effect.js';
import {sendData} from './api.js';
import {showPicturePreview} from './picture-preview.js';

const inputUploadPicture  = document.querySelector('#upload-file');
const initialValueInputUploadPicture = inputUploadPicture.getAttribute('value');
const formRedactionLoadedPicture = document.querySelector('.img-upload__overlay');
const buttonHideFormLoadedPicture = document.querySelector('.img-upload__cancel');
const inputTextHashtags = document.querySelector('.text__hashtags');
const textareaTextDescription = document.querySelector('.text__description');
const body = document.querySelector('body');
const buttonFormSubmission = formRedactionLoadedPicture.querySelector('.img-upload__submit');
const formUploadPicture = document.querySelector('#upload-select-image');

const templateMessageFormSubmissionSuccess = document.querySelector('#success').content.querySelector('section');
const messageFormSubmissionSuccess = templateMessageFormSubmissionSuccess.cloneNode(true);
const messageFormSubmissionSuccessButton = messageFormSubmissionSuccess.querySelector('button');

const templateMessageFormSubmissionError = document.querySelector('#error').content.querySelector('section');
const messageFormSubmissionError = templateMessageFormSubmissionError.cloneNode(true);
const messageFormSubmissionErrorButton = messageFormSubmissionError.querySelector('button');

function removeEventListenersFromForm() {
  buttonHideFormLoadedPicture.removeEventListener('click', hideFormLoadedPicture);
  document.removeEventListener('keydown', escHideFormLoadedPicture);
  formUploadPicture.removeEventListener('submit', submitTheForm);
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
  body.classList.remove('modal-open');
  removeEventListenersFromForm();
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
  formUploadPicture.addEventListener('submit', submitTheForm);
  addEventChangesScalePictureOnForm();
  addEventSettingEffectsOnForm();
}

function renderFormLoadedPicture() {
  formRedactionLoadedPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  showPicturePreview();
  addEventListenersToForm();
}

function removeMessageFormSubmissionSuccess() {
  body.removeChild(messageFormSubmissionSuccess);
  messageFormSubmissionSuccessButton.removeEventListener('click', removeMessageFormSubmissionSuccess);
  document.removeEventListener('keydown', removeMessageFormSubmissionSuccessEsc);
  document.removeEventListener('click', removeMessageFormSubmissionSuccessClickOutside);
}

function removeMessageFormSubmissionSuccessEsc(evt) {
  if (evt.key === 'Escape') {
    removeMessageFormSubmissionSuccess();
  }
}

function removeMessageFormSubmissionSuccessClickOutside(evt) {
  const withinBoundaries = evt.composedPath().includes(messageFormSubmissionSuccess);
  if (!withinBoundaries) {
    removeMessageFormSubmissionSuccess();
  }
}

function successfulSubmissionForm() {
  body.append(messageFormSubmissionSuccess);
  hideFormLoadedPicture();
  messageFormSubmissionSuccessButton.addEventListener('click', removeMessageFormSubmissionSuccess);
  document.addEventListener('keydown', removeMessageFormSubmissionSuccessEsc);
  document.addEventListener('click', removeMessageFormSubmissionSuccessClickOutside);
}


function removeMessageFormSubmissionError() {
  body.removeChild(messageFormSubmissionError);
  formRedactionLoadedPicture.classList.remove('hidden');
  messageFormSubmissionErrorButton.removeEventListener('click', removeMessageFormSubmissionError);
  document.removeEventListener('keydown', removeMessageFormSubmissionSuccessEsc);
  document.removeEventListener('click', removeMessageFormSubmissionSuccessClickOutside);
}

function removeMessageFormSubmissionErrorEsc(evt) {
  if (evt.key === 'Escape') {
    removeMessageFormSubmissionError();
  }
}

function removeMessageFormSubmissionErrorClickOutside(evt) {
  const withinBoundaries = evt.composedPath().includes(messageFormSubmissionError);
  if (!withinBoundaries) {
    removeMessageFormSubmissionError();
  }
}

function errorSubmissionForm() {
  body.append(messageFormSubmissionError);
  formRedactionLoadedPicture.classList.add('hidden');
  messageFormSubmissionError.addEventListener('click', removeMessageFormSubmissionError);
  document.addEventListener('keydown', removeMessageFormSubmissionErrorEsc);
  document.addEventListener('click', removeMessageFormSubmissionErrorClickOutside);
}

function blockButtonFormSubmission() {
  buttonFormSubmission.disabled = true;
}

function unblockButtonFormSubmission() {
  buttonFormSubmission.disabled = false;
}

function submitTheForm(evt) {
  evt.preventDefault();
  if (validateTheForm()) {
    sendData(successfulSubmissionForm, errorSubmissionForm, new FormData(evt.target), unblockButtonFormSubmission);
    blockButtonFormSubmission();
  }
}

inputUploadPicture.addEventListener('change', renderFormLoadedPicture);
