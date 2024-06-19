import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ height: 120, width: 120, borderRadius: 120 }}
        alt="logo"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
