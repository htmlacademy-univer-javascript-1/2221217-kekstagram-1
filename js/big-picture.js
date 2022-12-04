const bigPicture = document.querySelector('.big-picture');
const buttonHideBigPicture = bigPicture.querySelector('.big-picture__cancel');
const buttonLoadedMoreComments = bigPicture.querySelector('.social__comments-loader');
const storageComment = bigPicture.querySelector('.social__comments');
export const layoutComment = bigPicture.querySelector('.social__comment');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');

function createComment(commentInformation) {
  const comment = layoutComment.cloneNode(true);
  comment.querySelector('.social__picture').src = commentInformation.avatar;
  comment.querySelector('.social__picture').alt = commentInformation.name;
  comment.querySelector('.social__text').textContent = commentInformation.message;
  return comment;
}

let globalCommentsInformation;
let countRendersComments = 0;
function renderComments() {
  const similarListCommentsFragment = document.createDocumentFragment();
  globalCommentsInformation.slice(countRendersComments, countRendersComments + 5).forEach((commentInformation) => {
    const comment = createComment(commentInformation);
    similarListCommentsFragment.appendChild(comment);
    countRendersComments++;
  });
  storageComment.appendChild(similarListCommentsFragment);
  socialCommentCount.innerHTML = `${countRendersComments} из <span class="comments-count">
     ${globalCommentsInformation.length}</span> комментариев`;
  if (countRendersComments === globalCommentsInformation.length) {
    buttonLoadedMoreComments.classList.add('hidden');
  }
  else {
    buttonLoadedMoreComments.classList.remove('hidden');
  }
}

function removeEventListenersFromBigPicture() {
  buttonHideBigPicture.removeEventListener('click', hideBigPicture);
  document.removeEventListener('keydown', escCloseBigPicture);
  buttonLoadedMoreComments.removeEventListener('click', renderComments);
}

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  removeEventListenersFromBigPicture();
  countRendersComments = 0;
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
  renderComments();
}

function addEventListenersToBigPicture() {
  buttonHideBigPicture.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', escCloseBigPicture);
  buttonLoadedMoreComments.addEventListener('click', renderComments);
}

function renderBigPicture(pictureInformation) {
  globalCommentsInformation = pictureInformation.comments;
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  storageComment.innerHTML = '';
  fillBigPicture(pictureInformation);
  addEventListenersToBigPicture();
}

export {renderBigPicture};
