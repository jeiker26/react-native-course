import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

const ShoppingCartScreen = () => {
    const cartItems = [
      { id: '1', name: 'Product 1', quantity: 1 },
      { id: '2', name: 'Product 2', quantity: 1 },
      { id: '3', name: 'Product 3', quantity: 5 },
      { id: '4', name: 'Product 4', quantity: 2 },
      { id: '5', name: 'Product 5', quantity: 1 },
    ];;
    const renderItem = ({ item }) => <Text style={{ fontSize: 18, padding: 8 }}>
    {item.name} x {item.quantity}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping cart</Text>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
        </View>
    );
}

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
    }
});

export default ShoppingCartScreen;

/* import { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newItem) => {
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  }
  
  const removeItemFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  }
  
} */

