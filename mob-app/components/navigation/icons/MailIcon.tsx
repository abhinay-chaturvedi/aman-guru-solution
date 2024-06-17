import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export const MailIcon = ({color}: {color: string}) => {
  return (
    <Ionicons name="mail" size={28} color={color} />
  )
}



const styles = StyleSheet.create({})