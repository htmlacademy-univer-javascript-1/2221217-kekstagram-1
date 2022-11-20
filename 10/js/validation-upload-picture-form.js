const formUploadPicture = document.querySelector('#upload-select-image');
const inputTexthashtags = document.querySelector('.text__hashtags');
const textareaTextDescription = document.querySelector('.text__description');

const hashtagRegular = /^#[a-zа-яё0-9]{1,19}$/;

const pristine = new Pristine(formUploadPicture, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
});

function validateHashtag(value) {
    const hashtegsLowerCase = value.toLowerCase();
    const hashtags = hashtegsLowerCase.split(' ');
    const uniqueHashtags = [...new Set(hashtags)];
    if (value === '') {
        return true;
    }
    for (let hashtag of hashtags) {
        if (!hashtagRegular.test(hashtag)) {
            return false;
        }
    }
    return hashtags.length < 6 && hashtags.length === uniqueHashtags.length;
}

pristine.addValidator(
    inputTexthashtags, 
    validateHashtag, 
    'максимальная длина одного хэш-тега 20 символов, нельзя указать больше пяти хэш-тегов')

function validateComment(value) {
    return value.length < 141;
}

pristine.addValidator(
    textareaTextDescription, 
    validateComment, 
    'длина комментария не может составлять больше 140 символов')

function validateTheForm (evt) {
    if (!pristine.validate()) {
        evt.preventDefault();
    }
}

export {validateTheForm};