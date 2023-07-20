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
  return input.value;
};

const loadImg = () => {
  const searchString = getInput() || 'cat';
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=wTpxTeZdtT4DgfYZ7tZcyZyJnqHQN2kc&s=${searchString}&rating=r`, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      renderImg(response.data.images.original.url);
    })
    .catch((error) => console.log(error));
};

const btnListener = () => {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    loadImg();
  });
};

const initApp = () => {
  loadImg();
  btnListener();
};

initApp();
