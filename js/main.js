import {createPicturesInformation} from './data.js';
import {renderPictures} from './pictures.js';
import './upload-picture-form.js';
import './picture-effect.js';
const picturesInformation = createPicturesInformation(25);
renderPictures(picturesInformation);
