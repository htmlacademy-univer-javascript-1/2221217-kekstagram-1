const bigPicture = document.querySelector('.big-picture');
const buttonHideBigPicture = bigPicture.querySelector('.big-picture__cancel');
const buttonLoadedMoreComments = bigPicture.querySelector('.social__comments-loader');
const storageComment = bigPicture.querySelector('.social__comments');
const layoutComment = bigPicture.querySelector('.social__comment');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');

function createComment(commentInformation) {
    const comment = layoutComment.cloneNode(true);
    comment.querySelector('.social__picture').src = commentInformation.avatar;
    comment.querySelector('.social__picture').alt = commentInformation.name;
    comment.querySelector('.social__text').textContent = commentInformation.message;
    return comment;
}

let countRendersComents = 0;
function renderComments(commentsInformation) {
    const similarListCommentsFragment = document.createDocumentFragment();
    commentsInformation.slice(countRendersComents, countRendersComents + 5).forEach((commentInformation) => {
        const comment = createComment(commentInformation);
        similarListCommentsFragment.appendChild(comment);
        countRendersComents++;
    });
    storageComment.appendChild(similarListCommentsFragment);
    socialCommentCount.innerHTML = `${countRendersComents} из <span class="comments-count">
     ${commentsInformation.length}</span> комментариев`;
    if (countRendersComents === commentsInformation.length) {
        buttonLoadedMoreComments.classList.add('hidden');
    }
    else {
        buttonLoadedMoreComments.classList.remove('hidden');
    }
}

function removeEventListenersFromBigPicture() {
    buttonHideBigPicture.removeEventListener('click', hideBigPicture);
    document.removeEventListener('keydown', escCloseBigPicture);
}

function hideBigPicture() {
    bigPicture.classList.add('hidden'); 
    body.classList.remove('modal-open');
    removeEventListenersFromBigPicture();
    countRendersComents = 0;
}

function escCloseBigPicture(evt) {
    if (evt.key === 'Escape') {
        hideBigPicture();
    }
}

function fillBigPicture(pictureInformation) {
    bigPicture.querySelector('img').src = pictureInformation.url;
    bigPicture.querySelector('.likes-count').textContent = pictureInformation.likes;
    bigPicture.querySelector('.social__caption').textContent = pictureInformation.description;
    renderComments(pictureInformation.comments);
}

function addEventListenersToBigPicture(pictureInformation) {
    buttonHideBigPicture.addEventListener('click', hideBigPicture);
    document.addEventListener('keydown', escCloseBigPicture);
    buttonLoadedMoreComments.addEventListener('click', () => renderComments(pictureInformation.comments));
}

function renderBigPicture(pictureInformation) {
    bigPicture.classList.remove('hidden'); 
    body.classList.add('modal-open');
    storageComment.innerHTML = '';
    fillBigPicture(pictureInformation);
    addEventListenersToBigPicture(pictureInformation);
};

export {renderBigPicture};