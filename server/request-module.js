const request = require('request');
const url =
  'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';

request.get(url, (error, response, body) => {
  let json = JSON.parse(body);

  console.log(
    `City: ${json.results[0].formatted_address} -`,
    `Latitude: ${json.results[0].geometry.location.lat} -`,
    `Longitude: ${json.results[0].geometry.location.lng}`
  );
});
