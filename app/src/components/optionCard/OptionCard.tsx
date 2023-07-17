import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const OptionCard = ({ textTitle }: any) => {
  return (
    <TouchableOpacity style = {style. optionCardContainer}>
      <Text style = {style.optionText}>{textTitle}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
    optionCardContainer: {
        backgroundColor: '#cfeded',
        height: '80%',
        width: '30%',
        elevation: 10,
        borderColor: '#e9ad66',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 20,
    },
    optionText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 17,
    },
});
export default OptionCard;
