import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

firstPartDescription = ['красивый', 'старый', 'необыкновенный', 'новый', 'прекрасный'];
secondPartDescription = ['дом', 'пейзаж', 'пляж', 'шкаф', 'офис']
message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
let idNumber = 0;
const createPhotos = () => {
    idNumber++;
    return {
        id: idNumber,
        url: `photos/${idNumber}.jpg`,
        description: getRandomArrayElement(firstPartDescription) + ' ' + getRandomArrayElement(secondPartDescription),
        likes: getRandomPositiveInteger(15, 200),
        comments: Array.from({length: getRandomPositiveInteger(1,2)}, () => {return getRandomArrayElement(message)})
    };
};

export {createPhotos};