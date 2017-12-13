const axios = require('axios');
const url =
  'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';

const getLocation = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(
      `City: ${data.results[0].formatted_address} -`,
      `Latitude: ${data.results[0].geometry.location.lat} -`,
      `Longitude: ${data.results[0].geometry.location.lng}`
    );
  } catch (error) {
    console.log(error);
  }
};
getLocation(url);

