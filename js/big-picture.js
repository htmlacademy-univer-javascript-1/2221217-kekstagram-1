const bigPicture = document.querySelector('.big-picture');
const buttonHideBigPicture = bigPicture.querySelector('.big-picture__cancel')
const body = document.querySelector('body');

//Временно
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');
//

function hideBigPicture() {
    bigPicture.classList.add('hidden'); 
    body.classList.remove('modal-open');
}

function buttonCloseBigPicture() {
    hideBigPicture();
    buttonHideBigPicture.removeEventListener('click', buttonCloseBigPicture);
}

function escCloseBigPicture(evt) {
    if (evt.key === 'Escape') {
        hideBigPicture();
        document.removeEventListener('keydown', escCloseBigPicture);
    }
}

function renderBigPicture(pictureInformation) {
    bigPicture.classList.remove('hidden'); 
    body.classList.add('modal-open');
    bigPicture.querySelector('img').src = pictureInformation.url;
    bigPicture.querySelector('.likes-count').textContent = pictureInformation.likes;
    bigPicture.querySelector('.comments-count').textContent = pictureInformation.comments.length;
    bigPicture.querySelector('.social__caption').textContent = pictureInformation.description;
    buttonHideBigPicture.addEventListener('click', buttonCloseBigPicture);
    document.addEventListener('keydown', escCloseBigPicture);
};

export {renderBigPicture};