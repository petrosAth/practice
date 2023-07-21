import '../stylesheets/normalize.css';
import '../stylesheets/typography.css';
import '../stylesheets/variables.css';
import '../stylesheets/main.css';

const renderImg = (url) => {
  const img = document.querySelector('#img');
  img.src = url;
};

const getInput = () => {
  const input = document.querySelector('#input');
  return input.value || 'cat';
};

const getGif = (searchString) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=wTpxTeZdtT4DgfYZ7tZcyZyJnqHQN2kc&s=${searchString}&rating=r`,
      { mode: 'cors' }
    )
      .then((response) => {
        return response.status == 200 ? response.json() : reject(`\nERROR: getGif | status: ${response.status}`);
      })
      .then((response) => resolve(response.data.images.original.url))
      .catch((error) => console.log(`\nERROR: getGif | ${error}`));
  });
};

const showGif = () => {
  const searchString = getInput();
  getGif(searchString)
    .then(renderImg)
    .catch((error) => {
      console.log(`\nERROR: showGif | ${error}`);
    });
};

const btnListener = (func) => {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => func());
};

const init = () => {
  showGif();
  btnListener(showGif);
};

init();
