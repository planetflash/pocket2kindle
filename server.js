const express = require('express');
const GetPocket = require('node-getpocket');

const PORT = 8080;
const app = express();

app.set('port', PORT);

const config = {
	consumer_key: '73087-c39a4369f05b564f44417800',
	redirect_uri: 'http://localhost:3000/',
	request_token: null,
};

const pocket = new GetPocket(config);

app.get('/api/pocket/requestToken', (req, res) => {

	app.locals.res = res;

	const params = {
		redirect_uri: config.redirect_uri
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
			config.request_token = json.code;

			const url = pocket.getAuthorizeURL(config);
			console.log('Authentication URL: ' + url);
			app.locals.res.status(200).send({url});
		}
	});
});

app.get('/api/pocketAuthenticate', (req, res) => {
	console.log('Authentication callback active ...');
	console.log('Asking GetPocket for access token ...');

	app.locals.res = res;

	console.log('config: ', config);
	var params = {
		request_token: config.request_token
	};
	console.log('params: ', params);

	pocket.getAccessToken(params, function access_token_handler(error, response, body) {
		if (error) {
			console.log('Failed to get access token: ' + error);
			app.locals.res.send('<p>' + 'Failed to get access token: ' + error + '</p>');
		}

		else if (response.statusCode !== 200) {
			app.locals.res.send('<p>Oops, Pocket said ' + response.headers.status + ', ' + response.headers['x-error'] + '</p>');
		}

		else {
			var json = JSON.parse(body);
			config.access_token = json.access_token;
			config.user_name = json.username;
			console.log('Received access token: ' + config.access_token + ' for user ' + config.user_name);
			var config = {
				consumer_key: config.consumer_key,
				access_token: config.access_token
			};
			app.locals.res.send('<p>Pocket says "yes"</p>' +
			'<p>Your <code>GetPocket</code> configuration should look like this ...</p>' +
			'<p><code>var config = ' + JSON.stringify(config, undefined, 2) + ';</code></p>');
		}
	});
});

app.get('/api/hello', (req, res) => {
	res.json({ a: 1 });
});

app.listen(PORT, () => {
	console.log('API Started');
});
