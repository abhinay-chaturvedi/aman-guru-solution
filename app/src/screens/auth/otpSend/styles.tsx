import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerAvoiddingView: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    textTitle: {
      marginBottom: 50,
      marginTop: 50,
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 12,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      borderBottomWidth: 1.5,
      borderBottomColor: '#244DB7',
      marginBottom: 30,
    },
    openDialogView: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      color: 'black',
    },
    phoneInputContainer: {
      marginLeft: 5,
      flex: 1,
      height: 50,
      color: 'black',
    },
    viewButton: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 50,
    },
    buttonContainer: {
      width: 150,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#244DB7',
    },
    buttonText: {
      alignItems: 'center',
      color: '#ffffff',
    },
    countryCode: {
      color: 'black',
      fontWeight: '700',
    },
  });
  export default styles;
