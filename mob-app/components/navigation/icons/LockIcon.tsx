import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
export const LockIcon = ({color}: {color: string}) => {
  return (
    <Ionicons name="lock-closed" size={28} color={color} />
  )
}

