import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

export function Input({ InputIcon, placeHolder = "" }: { InputIcon: () => JSX.Element, placeHolder: string }) {
  const colorScheme = useColorScheme();
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "borderColor");
  return (
    <View
      style={{
        display: "flex",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        borderWidth: 2,
        borderColor: borderColor,
      }}
    >
      <InputIcon />
      <TextInput
        placeholderTextColor={textColor}
        placeholder={placeHolder}
        style={{ color: textColor, flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
