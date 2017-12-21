var hello = document.getElementById('app');
hello.innerHTML = 'Hello 5!';

hello.addEventListener('click', e => {
  console.log(e);

  fetch('/hello')
    .then(response => {
      console.log(response);

      if (!response.ok) return;

      console.log(response);
    })
    .catch(error => {
      console.error('Fetch Error :-S', error);
    });
});
