import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SearchMapView = props => {
  console.log('props', props);
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={props.region}
      showsUserLocation={true}
      onRegionChange={reg => props.onRegionChange(reg)}>
      <Marker coordinate={props.region} />
    </MapView>
  );
};
export default SearchMapView;
