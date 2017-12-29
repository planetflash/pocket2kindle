import printMe from './print.js';

const hello = document.getElementById('app');
hello.innerHTML = 'Hello 22!';

hello.addEventListener('click', e => {
  fetch('/api/hello')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch Error', error);
    });
});

if (process.env.NODE_ENV === 'development') {
  console.info('Running in development mode!');
}
