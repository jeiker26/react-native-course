import { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newItem) => {
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  }
  
  const removeItemFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  }
  
}
