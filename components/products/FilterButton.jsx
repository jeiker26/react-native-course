import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Reemplaza 'FontAwesome' con la fuente de iconos que prefieras

const FilterButton = ({iconName, buttonText, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Icon name={iconName} size={13} color="white" />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#373737',
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
});

export default FilterButton;
