	
import React, { useState, useEffect } from 'react';
import {
  Text
} from 'react-native';
 
const CartCounter = ({ cartItems = [] }) => {
  const [totalItems, setTotalItems] = useState(0);
 
  useEffect(() => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(itemCount);
  }, [cartItems]);
 
  return <Text>Total de productos en el carrito: {totalItems}</Text>;
};
 
export default CartCounter;