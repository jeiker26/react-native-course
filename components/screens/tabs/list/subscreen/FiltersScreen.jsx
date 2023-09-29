import React from 'react';
import {useRecoilState} from 'recoil';
import {filterState} from '../../../../state/filter';
import {StyleSheet, View} from 'react-native';
import CheckBox from 'react-native-check-box';
const FiltersScreen = () => {
  const [filters, setFilters] = useRecoilState(filterState);

  const handleFilterChange = (filter, value) => {
    setFilters({...filters, [filter]: value});
  };

  return (
    <View style={styles.container}>
      {Object.keys(filters).map(filterName => (
        <CheckBox
          key={filterName}
          isChecked={filters[filterName]}
          onClick={() => handleFilterChange(filterName, !filters[filterName])}
          style={styles.checkbox}
          leftText={filterName}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  label: {
    margin: 8,
  },
});

export default FiltersScreen;
