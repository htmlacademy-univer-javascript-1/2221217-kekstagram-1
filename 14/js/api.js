function getData(onSuccess, onError) {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
}

function sendData(onSuccess, onError, body, unblockButtonSubmissionForm) {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      onError();
    })
    .finally(() => {
      unblockButtonSubmissionForm();
    });
}

export {getData};
export {sendData};
