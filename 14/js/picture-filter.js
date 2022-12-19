import {getRandomArrayElements, getSortedPictureInformation, debounce} from './util.js';
import {renderPictures} from './pictures.js';

const filteringButtonSection = document.querySelector('.img-filters');
const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');

const COUNT_RANDOM_PICTURE = 10;

function cleanImageContainer() {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
}

function removeActiveClass() {
  const activeElement = document.querySelector('.img-filters__button--active');
  activeElement.classList.remove('img-filters__button--active');
}

function fillImageContainer(pictureInformation, button) {
  cleanImageContainer();
  removeActiveClass();
  renderPictures(pictureInformation);
  button.classList.add('img-filters__button--active');
}

function addEventsToFilterButtons(pictureInformation) {
  defaultFilterButton.addEventListener('click', debounce(() => {
    fillImageContainer(pictureInformation, defaultFilterButton);
  }));
  randomFilterButton.addEventListener('click', debounce(() => {
    fillImageContainer(getRandomArrayElements(pictureInformation, COUNT_RANDOM_PICTURE), randomFilterButton);
  }));
  discussedFilterButton.addEventListener('click', debounce(() => {
    fillImageContainer(getSortedPictureInformation(pictureInformation), discussedFilterButton);
  }));
}

function addFilteringButtons(pictureInformation) {
  filteringButtonSection.classList.remove('img-filters--inactive');
  addEventsToFilterButtons(pictureInformation);
}

export {addFilteringButtons};
