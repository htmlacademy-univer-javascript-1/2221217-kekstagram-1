import {createPhotos} from './data.js';

numberOfPhotos = 25;
const photo = Array.from({length: numberOfPhotos}, createPhotos);
console.log(photo);