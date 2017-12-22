import printMe from './print.js';

const hello = document.getElementById('app');
hello.innerHTML = 'Hello 21!';

hello.addEventListener('click', e => {
  console.log(e);

  // printMe();

  fetch('/api/hello')
    .then(response => {
      console.log(response);

      if (!response.ok) return;
    })
    .catch(error => {
      console.error('Fetch Error :-S', error);
    });
});
