const r2 = require('r2');
const url =
  'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';

const getLocation = async url => {
  try {
    const response = await r2(url).json;

    console.log(
      `City: ${response.results[0].formatted_address} -`,
      `Latitude: ${response.results[0].geometry.location.lat} -`,
      `Longitude: ${response.results[0].geometry.location.lng}`
    );
  } catch (error) {
    console.log(error);
  }
};
getLocation(url);

