import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const camera = useRef(null);

  if (device == null) {
    return <Text style={styles.title}>Camera error!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera</Text>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
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
    flex: 1,
    padding: 16,
  },
});

export default CameraScreen;
