const express = require('express');
const GetPocket = require('node-getpocket');

const PORT = 8080;
const app = express();

app.set('port', PORT);

app.locals.config = {
	consumer_key: '73087-c39a4369f05b564f44417800',
	redirect_uri: 'http://localhost:3000/?authenticate=true',
	request_token: null,
};

const pocket = new GetPocket(app.locals.config);

app.get('/api/pocket/requestToken', (req, res) => {

	app.locals.res = res;

	const params = {
		redirect_uri: app.locals.config.redirect_uri
	};

	pocket.getRequestToken(params, function(error, response, body) {

		// Error
		if (error || response.statusCode !== 200) {

			const status = (response && response.statusCode) || 400;

			console.error(error);

			app.locals.res.status(status).send('There was an error getting the Pocket Request Token');

		// Success
		} else {

			const json = JSON.parse(body);

			app.locals.config.request_token = json.code;

			const url = pocket.getAuthorizeURL(app.locals.config);

			console.log('Authentication URL: ' + url);

			app.locals.res.status(200).send({url});
		}
	});
});

app.get('/api/pocket/accessToken', (req, res) => {

	app.locals.res = res;

	const params = {
		request_token: app.locals.config.request_token
	};

	pocket.getAccessToken(params, function access_token_handler(error, response, body) {

		// Error
		if (error || response.statusCode !== 200) {

			const status = (response && response.statusCode) || 400;

			console.error(error);

			app.locals.res.status(status).send('There was an error getting the Pocket Access Token');

		// Success
		} else {

			const json = JSON.parse(body);

			app.locals.config.access_token = json.access_token;
			app.locals.config.user_name = json.username;

			console.log('Config: ', app.locals.config);

			const config = app.locals.config;
			app.locals.res.status(200).send({config});
		}
	});
});

app.listen(PORT, () => {
	console.log('API Started');
});
