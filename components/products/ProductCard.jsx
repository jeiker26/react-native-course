import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRecoilState} from 'recoil';
import CustomButton from './CustomButton';
import {wishlistState} from '../state/wishlist';
import {cartState} from '../state/cart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = ({item, shortDescription = false}) => {
  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  const [cartList, setCartlist] = useRecoilState(cartState);

  const handleAddToWishlist = () => {
    if (wishlist.filter(wi => wi.id === item.id).length) {
      setWishlist(oldWishlist => [
        ...oldWishlist.filter(wi => wi.id !== item.id),
      ]);
    } else {
      setWishlist(oldWishlist => [...oldWishlist, item]);
    }
  };

  const getIfExistInWishlist = item => {
    if (wishlist.filter(wi => wi.id === item.id).length) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddToCartlist = productToAdd => {
    const existingProduct = cartList.filter((item) => item?.id === productToAdd?.id);

    let cartAux = [...cartList.filter(i => !!i)];
    if (existingProduct.length) {
      cartAux = cartAux.map(item => {
        if (item.id === productToAdd.id) {
          return {
            ...item,
            units: item.units + 1,
          };
        }
        return item;
      });
    } else {
      cartAux = [...cartAux, {...productToAdd, units: 1}];
    }

    setCartlist(cartAux);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} src={item.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.buttonsContainer}>
        <Text style={styles.price}>{item.price} €</Text>

        <CustomButton
          onPress={() => handleAddToCartlist(item)}
          disabled={item.stock <= 0}>
          {item.stock <= 0 ? (
            <Ionicons name={'close'} size={17} color="white" />
          ) : (
            <Ionicons name={'add-sharp'} size={17} color="white" />
          )}
        </CustomButton>

        <TouchableOpacity
          style={styles.favButton}
          onPress={() => {
            handleAddToWishlist();
          }}>
          <Ionicons
            name={
              getIfExistInWishlist(item) ? 'heart-dislike' : 'heart-outline'
            }
            size={17}
            color="white"
          />
        </TouchableOpacity>
      </View>
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
  favButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    verticalAlign: 'center',
  },
});

export default ProductCard;
