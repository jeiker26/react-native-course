import React, {useState} from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import useProductSearch from '../../../../hooks/useProductSearch';
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import ProductCard from '../../../../products/ProductCard';
import List from '../../../../products/List';
import {useRecoilValue} from 'recoil';
import {filterState} from '../../../../state/filter';

const ProductListScreen = ({navigation}) => {
  // Filters
  const filterItems = useRecoilValue(filterState);
  const appliedFilters = Object.keys(filterItems).filter(
    fname => !!filterItems[fname],
  );

  // Searcher
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const products = useProductSearch(debouncedSearchTerm);

  // Todo: refactor filter by tags
  const filteredProducts = appliedFilters.length
    ? products.filter(p => appliedFilters.some(tag => p.tags.includes(tag)))
    : products;

  return (
    <View style={styles.container}>
      <Text>Applied filters: {appliedFilters.join(',')}</Text>
      <TextInput
        style={styles.searcher}
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
                  })
                }>
                <ProductCard navigation={navigation} item={product} />
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
  searcher: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
  },
});

export default ProductListScreen;
