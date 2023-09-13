import React from 'react';
import {
  View,
} from 'react-native';
import TShirtContainer from './components/container/TShirtContainer';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={styles.container}>
        <TShirtContainer />
      </View>
    </View>
  );
};

export default App;
