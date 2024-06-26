import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

export function Input({
  LeftIcon = () => null,
  placeHolder = "",
  onFocus=() => null,
  text="",
  setText=(text="") => undefined
}: {
  LeftIcon?: () => JSX.Element | null;
  placeHolder: string;
  onFocus?: () => any
  text: string
  setText: (text: string) => void
}) {
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
      <LeftIcon />
      <TextInput
        onFocus={onFocus}
        placeholderTextColor={textColor}
        placeholder={placeHolder}
        style={{ color: textColor, flex: 1, fontSize: 16 }}
        onChangeText={(text: string) => {
          console.log("text: ", text);
          setText(text)
        }}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
