import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import SearchBar from '../../../products/SearchBar';

const ProductListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} />
      <Button
        style={styles.buttonCart}
        title="Ver carrito"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonCart: {
    marginTop: 5,
  },
});

export default ProductListScreen;
