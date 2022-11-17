import Geocoder from 'react-native-geocoding';

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      data => resolve(data.coords),
      err => reject(err),
    );
  });
};

// Search by address
export const geocodeLocationByName = locationName => {
  return new Promise((resolve, reject) => {
    Geocoder.from(locationName)
      .then(json => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch(error => reject(error));
  });
};

// Search by coordinates (reverse geo-code)
export const geocodeLocationByCoords = (lat, long) => {
  return new Promise((resolve, reject) => {
    Geocoder.from(lat, long)
      .then(json => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch(error => reject(error));
  });
};
