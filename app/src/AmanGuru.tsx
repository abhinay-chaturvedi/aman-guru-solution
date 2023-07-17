import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UnAuthorizedNavigator } from './Navigator';
import auth from '@react-native-firebase/auth';

const AmanGuru = (): JSX.Element => {
  const user = auth().currentUser;
  console.log('Current User Will Be: ', JSON.stringify(user));
  return (
    <NavigationContainer>
      <UnAuthorizedNavigator/>
    </NavigationContainer>
  );
};

export default AmanGuru;
