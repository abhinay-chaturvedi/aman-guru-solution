import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export const CustomButton = ({
  title,
  backgroundColor = "#f194ff",
  color = "white",
}: {
  title: string;
  backgroundColor?: string;
  color?: string;
}) => {
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: color,
            fontWeight: "bold",
            fontSize: 20,
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
