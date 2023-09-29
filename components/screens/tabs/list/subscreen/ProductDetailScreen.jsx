import React from 'react';
import {View, Text, StyleSheet, Image, Alert, Button} from 'react-native';
import CustomButton from '../../../../products/CustomButton';
import {useSetRecoilState} from 'recoil';
import {wishlistState} from '../../../../state/wishlist';
import {cartState} from '../../../../state/cart';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const setWishlist = useSetRecoilState(wishlistState);
  const setCartlist = useSetRecoilState(cartState);

  const handleAddToWishlist = () => {
    setWishlist(oldWishlist => [...oldWishlist, product]);
  };

  const handleAddToCartlist = () => {
    setCartlist(oldCartlist => [...oldCartlist, product]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>

      <Image style={styles.image} src={product.image} />

      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price} €</Text>

      <CustomButton
        onPress={() => {
          Alert.alert('Alert', 'Item añadido a la cesta');
          handleAddToCartlist();
        }}
        disabled={product.stock > 0}>
        {product.stock > 0 ? (
          <Text style={{fontSize: 18, color: 'white'}}>Agotado</Text>
        ) : (
          <Text style={{fontSize: 18, color: 'white'}}>Comprar</Text>
        )}
      </CustomButton>

      <Button
        title="Añadir a fav"
        onPress={() => {
          Alert.alert('Alert', 'Item añadido a la cesta');
          handleAddToWishlist();
        }}
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
