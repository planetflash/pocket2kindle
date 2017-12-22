import printMe from './print.js';

var hello = document.getElementById('app');
hello.innerHTML = 'Hello 11!';

hello.addEventListener('click', e => {
  console.log(e);

  printMe();

  // fetch('/hello')
  //   .then(response => {
  //     console.log(response);
  //
  //     if (!response.ok) return;
  //
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.error('Fetch Error :-S', error);
  //   });
});
