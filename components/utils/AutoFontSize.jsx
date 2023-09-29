import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';

const AutoFontSize = () => {
  const {width} = useWindowDimensions();
  const fontSize = width < 350 ? 14 : width < 500 ? 18 : 24;

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, fontSize}}>
        El tamaño de este texto se ajusta según el tamaño de la pantalla.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default AutoFontSize;
