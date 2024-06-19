import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

export const CustomButton = ({
  title,
  backgroundColor = "#f194ff",
  color = "white",
  btnStyle = {fontSize: 20, padding: 10, borderRadius: 10}
}: {
  title: string;
  backgroundColor?: string;
  color?: string;
  btnStyle?: {fontSize: number, padding: number, borderRadius: number}
}) => {
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          padding: btnStyle.padding,
          borderRadius: btnStyle.borderRadius,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: color,
            fontWeight: "bold",
            fontSize: btnStyle.fontSize,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// export default Button

const styles = StyleSheet.create({});
