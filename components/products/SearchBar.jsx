import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useProductSearch from '../hooks/useProductSearch';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import ProductCard from './ProductCard';
import List from './List';
import CartCounter from './CartCounter';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filteredProducts = useProductSearch(debouncedSearchTerm);

  return (
    <View>
      <CartCounter cartItems={cartItems} />
      <TextInput
        value={searchTerm}
        onChangeText={value => setSearchTerm(value)}
        placeholder="Buscar productos"
      />
      <ScrollView style={styles.container}>
        <List>
          {filteredProducts.map(product => (
            <List.Item key={product.id} >
              <ProductCard
                item={{
                  ...product,
                  image: product.image ? product.image : 'https://picsum.photos/seed/picsum/200/300'
                }}
                addToCart={item => setCartItems([...cartItems, {
                  ...item,
                  quantity: 1
                }])} 
              />
            </List.Item>
          ))}
        </List>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});

export default SearchBar;
