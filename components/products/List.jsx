import React from 'react';
import { View, StyleSheet } from 'react-native';

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    {children}
  </View>
);

const List = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

List.Item = ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 1,
    marginBottom: 20,
  },
});

export default List;
