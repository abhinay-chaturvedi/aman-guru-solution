


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Authentication from './screens/auth/otpSend';
import InputOTPScreen from './screens/auth/otpVerification';
// import { updateUserDetail } from './services/firebase/Authentication';
export const UnAuthorizedNavigator = (): JSX.Element => {


    return (
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="EnterOTP" component={InputOTPScreen} />
      </Stack.Navigator>
    );
};

export const AuthorizedNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="EnterOTP" component={InputOTPScreen} />
      </Stack.Navigator>
    );
};
export const FillUserDetailNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="EnterOTP" component={InputOTPScreen} />
      </Stack.Navigator>
    );
};
