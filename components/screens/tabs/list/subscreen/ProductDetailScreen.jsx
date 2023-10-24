import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import CustomButton from '../../../../products/CustomButton';
import {cartState} from '../../../../state/cart';
import {useRecoilState} from 'recoil';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const [cartList, setCartlist] = useRecoilState(cartState);

  const handleAddToCartlist = () => {
    const existingProduct = cartList.filter((item) => item?.id === product?.id);

    let cartAux = [...cartList.filter(i => !!i)];
    if (existingProduct.length) {
      cartAux = cartAux.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            units: item.units + 1,
          };
        }
        return item;
      });
    } else {
      cartAux = [...cartAux, {...product, units: 1}];
    }

    setCartlist(cartAux);
    Alert.alert('Producto añadido al carrito');
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
        disabled={product.stock <= 0}>
        {product.stock <= 0 ? (
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: 'rgba(34,36,40,1)',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 18,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ProductDetailScreen;
