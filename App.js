import React from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import TabsIndexScreen from './components/screens/TabsIndexScreen';
import {NativeModules} from 'react-native';

export default function App() {
  console.log(NativeModules);
  const x = NativeModules.PermissionsModule.getName();
  console.log(x + 'as');

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabsIndexScreen />
      </NavigationContainer>
    </RecoilRoot>
  );
}
