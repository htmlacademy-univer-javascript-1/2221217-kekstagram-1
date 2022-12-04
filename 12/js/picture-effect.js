const slider = document.querySelector('.effect-level__slider');
const sliderStorage = document.querySelector('.img-upload__effect-level');
const fieldsetImgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const img = imgUploadPreview.querySelector('img');
const inputEffectLevelValue = sliderStorage.querySelector('.effect-level__value');

const sliderSettings = {
  chrome: {
    filter: 'grayscale',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    filter: 'sepia',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    filter: 'invert',
    units: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    filter: 'brightness',
    units: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  }
};

noUiSlider.create(slider, {
  range: {
    'min': 0,
    'max': 100,
  },
  start: 100,
  step: 1
});

function removeEffectFromPicture() {
  sliderStorage.classList.add('hidden');
  img.style.filter = 'none';
}

sliderStorage.classList.add('hidden');
function settingEffects(evt) {
  const evtValue = evt.target.value;
  if (evtValue === 'none') {
    removeEffectFromPicture();
  } else {
    sliderStorage.classList.remove('hidden');
    img.removeAttribute('class');
    img.classList.add(`effects__preview--${evtValue}`);
    if (sliderSettings[evtValue].options) {
      slider.noUiSlider.updateOptions(sliderSettings[evtValue].options);
    }
    slider.noUiSlider.on('update', () => {
      inputEffectLevelValue.value = slider.noUiSlider.get();
      img.style.filter = `${sliderSettings[evtValue].filter}(${inputEffectLevelValue.value}${sliderSettings[evtValue].units})`;
    });
  }
}

function addEventSettingEffectsOnForm() {
  removeEffectFromPicture();
  fieldsetImgUploadEffects.addEventListener('click', settingEffects);
}

function removeEventSettingEffectsFromForm() {
  fieldsetImgUploadEffects.removeEventListener('click', settingEffects);
}
export {addEventSettingEffectsOnForm};
export {removeEventSettingEffectsFromForm};
