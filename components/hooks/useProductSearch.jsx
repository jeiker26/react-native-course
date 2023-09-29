import {useState, useEffect} from 'react';
import productsData from '../data/productsData.json';

const useProductSearch = searchTerm => {
  const [filteredProducts, setFilteredProducts] = useState(productsData?.items);

  useEffect(() => {
    if (searchTerm) {
      const searchResults = productsData?.items.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts(productsData?.items);
    }
  }, [searchTerm]);

  return filteredProducts;
};

export default useProductSearch;
