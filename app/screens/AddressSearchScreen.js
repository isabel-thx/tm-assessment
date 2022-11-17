import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {View} from 'react-native';
import AddressInput from '../components/AddressInput';
import SearchMapView from '../components/MapView';
import {getLocation} from '../helpers/locationHelper';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export const AddressSearchScreen = () => {
  const [location, setLocation] = useState({
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  });

  // useEffect(() => {
  //   initLocation();
  // }, []);

  // const initLocation = () => {
  //   getLocation().then(data => {
  //     console.log(data);
  //     setLocation({
  //       region: {
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //         latitudeDelta: 0.003,
  //         longitudeDelta: 0.003,
  //       },
  //     });
  //   });
  // };

  const getCoordsFromName = loc => {
    setLocation({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  };

  const onMapRegionChange = region => {
    setLocation({region});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeArea}>
        {/* <AddressInput
          notifyChange={loc => {
            getCoordsFromName(loc);
            console.log('loc', loc);
          }}
        /> */}
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
            getCoordsFromName(details.geometry.location);
          }}
          onFail={error => console.error(error)}
          query={{
            key: 'AIzaSyBd2uChYtjEuHK3rLNLkWtl4akz8GXCwu0',
            language: 'en',
            types: 'address',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
        />
      </View>

      {/* {location.region.longitude ? ( */}
      <View style={styles.container}>
        {/* <SearchMapView
            style={styles.map}
            region={location}
            onRegionChange={reg => onMapRegionChange(reg)}
          /> */}
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          region={location}
          showsUserLocation={true}
          onRegionChange={reg => onMapRegionChange(reg)}
        >
          <Marker coordinate={location} />
        </MapView> */}
      </View>
      {/* ) : null} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
});

export default AddressSearchScreen;
