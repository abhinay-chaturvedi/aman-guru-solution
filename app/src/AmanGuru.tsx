import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthorizedNavigator, UnAuthorizedNavigator } from './Navigator';
// import auth from '@react-native-firebase/auth';

const AmanGuru = (): JSX.Element => {
  // const user = auth().currentUser;
  // console.log('Current User Will Be: ', JSON.stringify(user));
  return (
    <NavigationContainer>
      <AuthorizedNavigator/>
    </NavigationContainer>
  );
};

export default AmanGuru;
