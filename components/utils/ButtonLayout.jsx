import React from 'react';
import {View, Button, StyleSheet, Platform} from 'react-native';

const ButtonLayout = () => {
  const flexDirection = Platform.OS === 'android' ? 'row' : 'column';

  return (
    <View style={{...styles.container, flexDirection}}>
      <Button title="Botón 1" onPress={() => {}} />
      <Button title="Botón 2" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonLayout;
