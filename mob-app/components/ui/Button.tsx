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

const buttonDefaultStyle = {fontSize: 20, padding: 10, borderRadius: 10, color: "white", backgroundColor: "#f194ff"}
export const CustomButton = ({
  title,
  btnStyle = {...buttonDefaultStyle}
}: {
  title: string;
  btnStyle?: {fontSize?: number, padding?: number, borderRadius?: number, color?: string, backgroundColor?: string}
}) => {
  btnStyle = {...buttonDefaultStyle, ...btnStyle}
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          backgroundColor: btnStyle.backgroundColor,
          padding: btnStyle.padding,
          borderRadius: btnStyle.borderRadius,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: btnStyle.color,
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
