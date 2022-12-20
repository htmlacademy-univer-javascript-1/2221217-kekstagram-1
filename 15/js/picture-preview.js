const inputUploadPicture  = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview').querySelector('img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

function showPicturePreview() {
  const file = inputUploadPicture.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
}

export {showPicturePreview};
