
import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './styles'
// import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const Authentication = ({ navigation }:any) => {
  const [phone, setPhone] = useState();
  const [focusInput, setFocusInput] = useState(true);
  let textInput: any = useRef(null);
  const onChangePhone = (number: any) => {
    setPhone(number);
    console.log('onChangePhone pressed');
  };
  const onPressContinue = async () => {
    console.log('onPressContinur pressed', phone);
    if (phone) {
      navigation.navigate('EnterOTP');
      const confirmation = await auth().signInWithPhoneNumber(phone);
      console.log(JSON.stringify(confirmation));
      const res = await confirmation.confirm('000000');
      console.log(res);
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
        <Text style = {styles.textTitle}>{'Please input your mobile phone number: '}</Text>
        <View style = {styles.inputContainer}>
          <View style = {styles.openDialogView}>
            <Text>+91 |</Text>
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
              <Text style = {styles.buttonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Authentication;
