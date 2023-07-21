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

const getGif = async (searchString) => {
  try {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=wTpxTeZdtT4DgfYZ7tZcyZyJnqHQN2kc&s=${searchString}&rating=r`,
      { mode: 'cors' }
    );
    const dataJson = await data.json();
    const gifUrl = dataJson.data.images.original.url;

    return gifUrl;
  } catch (err) {
    console.log(`ERROR: on function ${getGif.name} | ${err}`);
  }
};

const showGif = async () => {
  try {
    const searchString = getInput() || 'cat';
    const gifUrl = await getGif(searchString);
    renderImg(gifUrl);
  } catch (err) {
    console.log(`ERROR: on function ${showGif.name} | ${err}`);
  }
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
