import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputButtonScreen from '../products/InputButtonScreen';
import ButtonLayout from '../utils/ButtonLayout';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la "Tienda"</Text>
      <Button title="Ver tienda" onPress={() => navigation.navigate('Shop')} />
      <InputButtonScreen />

      <ButtonLayout />
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

export default HomeScreen;
