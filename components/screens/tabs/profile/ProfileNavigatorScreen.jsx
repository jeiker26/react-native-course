import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import {useRecoilValue} from 'recoil';
import {authState} from '../../../state/auth';
import ProfileScreen from './ProfileScreen';
import TutorialBasicScreen from './TutorialBasicScreen';
import TutorialAdvancedScreen from './TutorialAdvancedScreen';

const Stack = createStackNavigator();

const ProfileNavigatorScreen = ({navigation}) => {
  const data = useRecoilValue(authState);

  const goToLogin = () => navigation.navigate('Login');

  useEffect(() => {
    if (!data.isLoggedIn) {
      goToLogin();
    }
  }, [data]);

  return (
    <Stack.Navigator>
      {!data.isLoggedIn ? (
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TutorialScreen"
            component={
              data.tutorial === 'basic'
                ? TutorialBasicScreen
                : TutorialAdvancedScreen
            }
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileNavigatorScreen;
