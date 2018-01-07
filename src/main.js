import printMe from './print.js';
import './main.scss';

const hello = document.getElementById('app');
hello.innerHTML = '<p>Hello 22!</p>';

hello.addEventListener('click', e => {

	fetch('/api/hello')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch Error', error);
    });

	printMe();
});

if (process.env.NODE_ENV === 'development') {
  console.info('Running in development mode!');
}
