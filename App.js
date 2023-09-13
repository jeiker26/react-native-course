import React from 'react';
import {
  View,
} from 'react-native';
import HomeScreen from './components/screens/HomeScreen';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HomeScreen />
    </View>
  );
};

export default App;
