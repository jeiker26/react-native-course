import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabsIndexScreen from './tabs/TabsIndexScreen';
import LoginScreen from './LoginScreen';
import {useRecoilValue} from 'recoil';
import {authState} from '../state/auth';

const Stack = createStackNavigator();

export default function App() {
  const data = useRecoilValue(authState);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!data.isLoggedIn ? (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="TabsIndex"
            component={TabsIndexScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
