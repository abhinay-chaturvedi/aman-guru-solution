import { StyleSheet } from 'react-native';
// import { Color } from '../../../constants';

export const styles = StyleSheet.create({
root: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
},
title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight:'bold',
    color: 'black',
},
subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
    color: 'black',
},
codeFieldRoot: {
    marginTop: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
},
cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
 },
 cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
},
focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
},

button: {
    marginTop: 20,
    borderRadius: 50,
},
resendCode: {
    color: 'blue',
    marginStart: 20,
    marginTop: 40,
},
resendCodeText: {
    marginStart: 20,
    marginTop: 40,
    color: 'black',
    fontWeight: '500',
},
resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
});
