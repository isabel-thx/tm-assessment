import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export const AddressInput = props => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      autoFocus={true}
      returnKeyType={'search'}
      listViewDisplayed={false} // true/false/undefined
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log('here', data, details);
        props.notifyChange(details.geometry.location);
      }}
      query={{
        key: 'AIzaSyBP_eDS4VDuo_3O2M8DOgkleLbI9OQ4e9Q',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
    />
  );
};

export default AddressInput;
