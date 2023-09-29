import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useRecoilValue} from 'recoil';
import {cartState} from '../../../state/cart';
import {wishlistState} from '../../../state/wishlist';

const CartScreen = () => {
  const cartItems = useRecoilValue(cartState);
  const wishItems = useRecoilValue(wishlistState);

  const renderItem = ({item}) => (
    <Text style={{fontSize: 18, padding: 8}}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <Text style={styles.title}>Lista de deseos</Text>
      <FlatList
        data={wishItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
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
});

export default CartScreen;
