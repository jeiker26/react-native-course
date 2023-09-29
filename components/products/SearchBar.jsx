import React, {useState} from 'react';
import useDebounce from '../hooks/useDebounce';
import useProductSearch from '../hooks/useProductSearch';
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ProductCard from './ProductCard';
import List from './List';
import CartCounter from './CartCounter';

const SearchBar = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filteredProducts = useProductSearch(debouncedSearchTerm);

  const handleAddCart = item => {
    setCartItems([
      ...cartItems,
      {
        ...item,
        quantity: 1,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <CartCounter cartItems={cartItems} />
      <TextInput
        value={searchTerm}
        onChangeText={value => setSearchTerm(value)}
        placeholder="Buscar productos"
      />
      <ScrollView>
        <List>
          {filteredProducts.map(product => (
            <List.Item key={product.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Product', {
                    product,
                    handleAddCart,
                  })
                }>
                <ProductCard
                  navigation={navigation}
                  item={product}
                  addToCart={handleAddCart}
                />
              </TouchableOpacity>
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
  },
});

export default SearchBar;
