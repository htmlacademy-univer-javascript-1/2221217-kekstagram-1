import {validateTheForm} from './validation-upload-picture-form.js';

const formUploadPicture = document.querySelector('#upload-select-image');
const inputUploadPicture  = document.querySelector('#upload-file');
const initialValueInputUploadPicture = inputUploadPicture.getAttribute('value');
const formRedactionLoadedPicture = document.querySelector('.img-upload__overlay');
const buttonHideFormLoadedPicture = document.querySelector('.img-upload__cancel');
const inputTexthashtags = document.querySelector('.text__hashtags');
const textareaTextDescription = document.querySelector('.text__description');
const body = document.querySelector('body');


function removeEventListenerFromForm() {
    buttonHideFormLoadedPicture.removeEventListener('click', hideFormLoadedPicture);
    document.removeEventListener('keydown', escHideFormLoadedPicture);
    formUploadPicture.removeEventListener('submit', validateTheForm);
}

function resetInputValue() {
    inputUploadPicture.value = initialValueInputUploadPicture;
    inputTexthashtags.value = '';
    textareaTextDescription.value = '';  
}

function hideFormLoadedPicture() {
    formRedactionLoadedPicture.classList.add('hidden'); 
    body.classList.remove('modal-open');
    removeEventListenerFromForm();
    resetInputValue();
}

function escHideFormLoadedPicture(evt) {
    const activeElement = document.activeElement;
    if (evt.key === 'Escape' && activeElement !== inputTexthashtags && activeElement !== textareaTextDescription) {
        hideFormLoadedPicture();
    }
}


function addEventListenersToForm() {
    buttonHideFormLoadedPicture.addEventListener('click', hideFormLoadedPicture);
    document.addEventListener('keydown', escHideFormLoadedPicture);
    formUploadPicture.addEventListener('submit', validateTheForm);
}

function renderFormLoadedPicture() {
    formRedactionLoadedPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    addEventListenersToForm();
}

inputUploadPicture.addEventListener('change', renderFormLoadedPicture);