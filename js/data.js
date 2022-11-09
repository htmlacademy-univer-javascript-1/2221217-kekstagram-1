import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const firstPartDescription = ['красивый', 'старый', 'необыкновенный', 'новый', 'прекрасный'];
const secondPartDescription = ['дом', 'пейзаж', 'пляж', 'шкаф', 'офис']
const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const generatePictureInformation = (idNumber) => {
    return {
        id: idNumber,
        url: `photos/${idNumber}.jpg`,
        description: getRandomArrayElement(firstPartDescription) + ' '
          + getRandomArrayElement(secondPartDescription),
        likes: getRandomPositiveInteger(15, 200),
        comments: Array.from({length: getRandomPositiveInteger(1,2)}, () => 
         {return getRandomArrayElement(message)})
    };
};

const createArrayPicturesInformation = (count) => {
    let picturesInformation = new Array(count);
    for (let i = 1; i <= count; i++) {
        picturesInformation[i - 1] = generatePictureInformation(i);
    }
    return picturesInformation;
}
export {createArrayPicturesInformation};