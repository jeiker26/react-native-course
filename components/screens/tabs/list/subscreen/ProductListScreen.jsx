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
import {useRecoilState} from 'recoil';
import {filterState} from '../../../../state/filter';
import FilterButton from '../../../../products/FilterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductListScreen = ({navigation}) => {
  // Filters
  const [filterItems, setFilterItems] = useRecoilState(filterState);
  const appliedFilters = Object.keys(filterItems).filter(
    fname => !!filterItems[fname],
  );

  // Searcher
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const products = useProductSearch(debouncedSearchTerm);

  const filteredProducts = appliedFilters.length
    ? products.filter(p =>
        appliedFilters.some(tag => {
          return p.tags.includes(tag);
        }),
      )
    : products;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searcher}
        value={searchTerm}
        onChangeText={value => setSearchTerm(value)}
        placeholder="Buscar productos"
      />

      {appliedFilters?.length ? (
        <>
          <Text style={styles.appliedFilters}>Filtros aplicados:</Text>

          <View style={styles.filtersContainer}>
            {appliedFilters.map(filter => (
              <FilterButton
                buttonText={filter}
                iconName={'close'}
                onPress={() => {
                  const filterAux = {...filterItems};
                  filterAux[filter] = false;
                  setFilterItems(filterAux);
                }}
              />
            ))}
            <TouchableOpacity
              style={styles.applyFiltersButton}
              onPress={() => {
                navigation.push('Filters');
              }}>
              <Text style={styles.applyFiltersButtonText}>
                <Ionicons name={'filter'} size={17} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.filtersContainer}>
          <TouchableOpacity
            style={styles.applyFiltersButton}
            onPress={() => {
              navigation.push('Filters');
            }}>
            <Text style={styles.applyFiltersButtonText}>Aplicar filtros</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView>
        <List>
          {filteredProducts.length ? (
            <>
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
            </>
          ) : (
            <Text style={styles.emptyText}>
              No se han encontrado resultados.
            </Text>
          )}
        </List>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,36,40,1)',
    padding: 10,
    marginBottom: 50,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  appliedFilters: {
    color: 'white',
    marginBottom: 10,
  },
  applyFiltersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 10,
    padding: 6,
    marginBottom: 5,
    marginRight: 5,
  },
  applyFiltersButtonText: {
    color: 'white',
    padding: 2,
  },
  searcher: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  emptyText: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    marginTop: 50,
    marginLeft: 65,
  },
});

export default ProductListScreen;
