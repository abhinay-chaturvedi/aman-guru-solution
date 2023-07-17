import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import style from './styles';
const Header = () => {
    const url = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  return (
    <View style = {style.headerContainer}>
        {/* <Avatar.Image size={24} source={require('../../assets/profile.png')} /> */}
        <TouchableOpacity style = {style.profileContainer}>
        <Avatar.Image size={ 40 } source={{uri: url}} />
        </TouchableOpacity>
        <View style = {style.headerTextContainer}>
            <Text style = {style.headerText}>Abhinay Chaturvedi</Text>
        </View>
    </View>
  );
};

export default Header;
