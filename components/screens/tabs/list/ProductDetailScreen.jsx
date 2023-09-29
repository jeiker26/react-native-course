import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import CustomButton from '../../../products/CustomButton';

const ProductDetailScreen = ({route, addToCart}) => {
  const {product, handleAddCart} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>

      <Image style={styles.image} src={product.image} />

      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price} €</Text>

      <CustomButton
        onPress={() => {
          Alert.alert('Alert', 'Item añadido a la cesta');
          handleAddCart(product);
        }}
        disabled={product.stock > 0}>
        {product.stock > 0 ? (
          <Text style={{fontSize: 18, color: 'white'}}>Agotado</Text>
        ) : (
          <Text style={{fontSize: 18, color: 'white'}}>Comprar</Text>
        )}
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ProductDetailScreen;
