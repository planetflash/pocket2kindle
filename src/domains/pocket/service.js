// Get Request Token
export const getRequestToken = () => {

	const promise = new Promise((resolve, reject) => {

		fetch('/api/pocket/requestToken')
		  .then( response => {
		    if (!response.ok) { throw response; }
		    return response.json();
		  })
		  .then( json => {
				resolve(json);
		  })
		  .catch( error => {
		    error.text().then( errorMessage => {
					reject(errorMessage);
		    })
		  });
	});

	return promise;
}

// Get AC Token
export const getAccessToken = () => {

	const promise = new Promise((resolve, reject) => {

		fetch('/api/pocket/accessToken')
		  .then( response => {
				console.log(response);
		    if (!response.ok) { throw response; }
		    return response.json();
		  })
		  .then( json => {
				console.log(json);
				resolve(json);
		  })
		  .catch( error => {
				console.error(error);
		    error.text().then( errorMessage => {
					reject(errorMessage);
		    })
		  });
	});

	return promise;
}
