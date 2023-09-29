import React from 'react';
import 'react-native-gesture-handler';
import IndexScreen from './components/screens/IndexScreen';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <IndexScreen />
    </RecoilRoot>
  );
}
