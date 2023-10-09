import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export const MARKERS_DATA = [
  {
    id: '1',
    latitude: 37.78825,
    longitude: -122.4324,
    color: '#2F3136',
  },
];

const HomeScreen = ({navigation}) => {
  function requestLocationPermission() {
    Geolocation.requestAuthorization(
      () => console.log('Permiso concedido'),
      () => console.error('Permiso de ubicación denegado'),
    );
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la "Tienda"</Text>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {MARKERS_DATA.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeScreen;
