import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UnAuthorizedNavigator } from './Navigator';

const AmanGuru = (): JSX.Element => {
  return (
    <NavigationContainer>
      <UnAuthorizedNavigator/>
    </NavigationContainer>
  );
};

export default AmanGuru;
