import { View } from 'react-native';
import React from 'react';
// import { Surface } from 'react-native-paper';
// import { Appbar } from 'react-native-paper';
import Header from '../../components/header';
import OptionCard from '../../components/optionCard/OptionCard';
import { Avatar } from 'react-native-paper';
import style from './styles';
const Home = () => {
  return (
    <View style = {style.container}>
        <Header/>
        <View style = {style.homeBodyContainer}>
            <View style = {style.logoContainer}>
            <Avatar.Image size={164} source={require('../../assets/logo.png')} />
            </View>
            <View style = {style.optionContainer}>
                <View style = {style.subOptionContainer}>
                    <OptionCard textTitle = "Activation" />
                    <OptionCard textTitle = "Frp Files" />
                    <OptionCard textTitle = "Share Me" />
                </View>
                <View style = {style.subOptionContainer}>
                    <OptionCard textTitle = "YouTube" />
                    <OptionCard textTitle = "Update" />
                    <OptionCard textTitle = "Chat Us" />
                </View>
            </View>
        </View>
    </View>
  );
};


export default Home;
