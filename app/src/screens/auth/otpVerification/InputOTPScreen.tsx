import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View ,TouchableOpacity, Button} from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from
'react-native-confirmation-code-field';
import { styles } from './styles';

interface VerifyCodeProps {
}
const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 90;

const InputOTPScreen: React.FC<VerifyCodeProps> = () => {
let resendOtpTimerInterval: any;

const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
);
const sendOtpFirebase = () => {
  console.log("sendOtp firevbase pressed");
};
//to start resent otp option
const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
            clearInterval(resendOtpTimerInterval);
        } else {
            setResendButtonDisabledTime(resendButtonDisabledTime - 1);
        }
    }, 1000);
};

//on click of resend button
const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
};

//declarations for input field
const [value, setValue] = useState('');
const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
});

//start timer on screen on launch
useEffect(() => {
    startResendOtpTimer();
    return () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
    };
}, [resendButtonDisabledTime]);

return (
    <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Verify the Authorisation Code</Text>
        <Text style={styles.subTitle}>Sent to 7687653902</Text>
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                    <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                </View>
            )}
        />
        {/* View for resend otp  */}
        {resendButtonDisabledTime > 0 ? (
            <Text style={styles.resendCodeText}>Resend Authorisation Code in {resendButtonDisabledTime} sec</Text>
        ) : (
                <TouchableOpacity
                    onPress={onResendOtpButtonPress}>
                    <View style={styles.resendCodeContainer}>
                        <Text style={styles.resendCode} > Resend Authorisation Code</Text>
                        <Text style={{ marginTop: 40 }}> in {resendButtonDisabledTime} sec</Text>
                    </View>
                </TouchableOpacity >
            )
        }
        <View style={styles.button}>
            <Button title="Submit" onPress={sendOtpFirebase} />
        </View>
    </SafeAreaView >
);
};
export default InputOTPScreen;
