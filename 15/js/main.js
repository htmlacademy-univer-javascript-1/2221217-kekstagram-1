import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import {loadingDataError} from './util.js';
import {addFilteringButtons} from './picture-filter.js';
import './upload-picture-form.js';
import './picture-effect.js';


getData((pictureInformation) => {
  renderPictures(pictureInformation);
  addFilteringButtons(pictureInformation);
}, loadingDataError);


