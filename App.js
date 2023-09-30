import React from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import TabsIndexScreen from './components/screens/TabsIndexScreen';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabsIndexScreen />
      </NavigationContainer>
    </RecoilRoot>
  );
}
