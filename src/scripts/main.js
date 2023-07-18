import '../stylesheets/normalize.css';
import '../stylesheets/typography.css';
import '../stylesheets/variables.css';
import '../stylesheets/main.css';

const fetchGif = () =>
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=wTpxTeZdtT4DgfYZ7tZcyZyJnqHQN2kc&s=cat', {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => response.data.images.original.url)
    .catch((error) => console.log(error));
