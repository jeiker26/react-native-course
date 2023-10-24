import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {cartState} from '../../../state/cart';
import {wishlistState} from '../../../state/wishlist';
import {authState} from '../../../state/auth';

const CartScreen = ({navigation}) => {
  const [productsInCart, setProductsInCart] = useRecoilState(cartState);
  const user = useRecoilValue(authState);
  const wishItems = useRecoilValue(wishlistState);

  const calculateTotal = () => {
    return productsInCart.reduce(
      (total, product) => total + product.price * product.units,
      0,
    );
  };

  const removeProductFromCart = productId => {
    setProductsInCart(oldProducts => [
      ...oldProducts.filter(product => product.id !== productId),
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {wishItems.map(product => (
        <View style={styles.productItem} key={product.id}>
          <Image src={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text>{product.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeProductFromCart(product.id)}>
            <Text style={styles.removeButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))}

      {productsInCart.map(product => (
        <View style={styles.productItem} key={product.id}>
          <Image src={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text>{product.name}</Text>
            <Text>Unidades: {product.units}</Text>
            <Text>Precio: {product.price}€</Text>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeProductFromCart(product.id)}>
            <Text style={styles.removeButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))}
      {productsInCart.length ? (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: {calculateTotal()}€</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => {
              if (user?.userId) {
                navigation.navigate('Payment');
              } else {
                navigation.navigate('Login');
              }
            }}>
            <Text style={styles.buyButtonText}>
              {user?.userId ? 'Comprar Todo' : 'Login'}
            </Text>
          </TouchableOpacity>
          {!user?.userId && (
            <Text style={styles.totalText}>
              Por favor, antes de comprar tienes que hacer login
            </Text>
          )}
        </View>
      ) : (
        <Text>El carrito está vacío.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 15,
  },
  productImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  removeButton: {
    backgroundColor: 'red', // Puedes usar el color rojo Sith
    borderRadius: 5,
    padding: 5,
  },
  removeButtonText: {
    color: 'white',
  },
  totalContainer: {
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
  },
  buyButton: {
    backgroundColor: '#0000FF', // Azul Jedi
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CartScreen;
