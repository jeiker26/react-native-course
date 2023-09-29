import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la "Tienda"</Text>
      <Button
        title="Ver tienda"
        onPress={() => navigation.navigate('ShopNavigator')}
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

export default HomeScreen;
