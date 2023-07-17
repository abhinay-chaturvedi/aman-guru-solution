
import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './styles';

import auth from '@react-native-firebase/auth';
import { sendVerificationCode, signInWithVerificationCode } from '../../../services/firebase/Authentication';
import { ActivityIndicator } from 'react-native-paper';
const Authentication = ({ navigation, ...props }:any) => {

  // console.log('props will be; ', props);
  const [activity, setActivity] = useState(false);
  const [phone, setPhone] = useState();
  const [focusInput, setFocusInput] = useState(true);
  let textInput: any = useRef(null);
  const countryCode = '+91';

  const onChangePhone = (number: any) => {
    setPhone(number);
    console.log('onChangePhone pressed');
  };

  const onPressContinue = async () => {
    console.log('onPressContinur pressed', phone);
    try {
      if (phone) {
        setActivity(true);
        const verificationId = await sendVerificationCode(countryCode + phone);
        // const confirmation = await auth().signInWithPhoneNumber(countryCode + phone);
        console.log('onPressContinue, verificationId: ', JSON.stringify(verificationId));
        // const res = await confirmation.confirm('000000');
        setActivity(false);
        if (verificationId) {
          navigation.navigate('EnterOTP', { verificationId: verificationId, phone: phone });
        }
        // const response = await signInWithVerificationCode(res!, '000000');
        // console.log('onPressContinue, response: ', JSON.stringify(response));
        // console.log('SignIn SuccessFull!');
      }
    } catch (err) {
      console.log('Error, onPressContinue, err: ', JSON.stringify(err));
      setActivity(false);
      throw err;
    }
  };

  const onChangeFocus = () => {
    console.log('onChangeFocus called');
    setFocusInput(true);
  };
  const onChangeBlur = () => {
    console.log('onChangeBlur pressed ');
    setFocusInput(false);
  };
  useEffect(() => {
    textInput.focus();
  }, []);
  return (
    <View style = {styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset = {20}
        behavior = {'padding'}
        style = {styles.containerAvoiddingView}
      >
        <Text style = {styles.textTitle}>{'Please Enter Your Mobile Phone Number'}</Text>
        <View style = {styles.inputContainer}>
          <View style = {styles.openDialogView}>
            <Text style = {styles.countryCode}>+91 |</Text>
          </View>
          <TextInput
            ref={(input) => {textInput = input;}}
            style = {styles.phoneInputContainer}
            placeholder="800 366 495 5"
            keyboardType="numeric"
            value = {phone}
            onChangeText={onChangePhone}
            secureTextEntry = {false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
          />
        </View>
        <View style = {styles.viewButton}>
          <TouchableOpacity onPress={onPressContinue}>
            <View style =  {styles.buttonContainer}>
              {
                activity ? <ActivityIndicator color="#00ff00"/> :
                <Text style = {styles.buttonText}>Continue</Text>
              }
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Authentication;
