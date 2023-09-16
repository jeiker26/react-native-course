import { useState, useEffect } from 'react';
import productsData from '../data/productsData.json';

const useProductSearch = (searchTerm) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const searchResults = productsData?.items.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(searchResults);
  }, [searchTerm]);

  return filteredProducts;
};

export default useProductSearch;
