import React from 'react';
import {Image, Text, View, StyleSheet, Alert} from 'react-native';
import CustomButton from './CustomButton';

const ProductCard = ({item, addToCart}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} src={item.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price} €</Text>

      <CustomButton
        onPress={() => {
          Alert.alert('Alert', 'Item añadido a la cesta');
          addToCart(item);
        }}
        disabled={item.stock > 0}>
        {item.stock > 0 ? (
          <Text style={{fontSize: 18, color: 'white'}}>Agotado</Text>
        ) : (
          <Text style={{fontSize: 18, color: 'white'}}>Comprar</Text>
        )}
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
});

export default ProductCard;
