import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import TabsIndexScreen from './components/screens/TabsIndexScreen';
import {Text, Button} from 'react-native';
import RTNDeviceName from 'rtn-device/js/NativeGetDeviceName';

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Text style={{marginLeft: 20, marginTop: 20}}>
          {result ?? 'Whats my device?'}
        </Text>
        <Button
          title="Compute"
          onPress={async () => {
            const value = await RTNDeviceName?.getDeviceModel();
            setResult(value ?? null);
          }}
        />

        <TabsIndexScreen />
      </NavigationContainer>
    </RecoilRoot>
  );
}
