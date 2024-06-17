import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function Input({ InputIcon }: { InputIcon: () => JSX.Element }) {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        display: "flex",
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors[colorScheme ?? "light"].borderColor,
      }}
    >
      <InputIcon />
      <TextInput
        placeholderTextColor={Colors[colorScheme ?? "light"].text}
        placeholder="enter your email"
        style={{ color: "white", flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
