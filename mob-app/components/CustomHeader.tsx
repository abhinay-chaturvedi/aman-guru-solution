import { View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

import React from "react";
import { router } from "expo-router";
let screenWidth = Dimensions.get("window").width
const CustomHeader = ({ tintColor }: { tintColor: string }) => {
  // console.log(props.props)
  return (
    <TouchableOpacity onPress={() => router.push("/profile")}>
    <View style={{alignSelf: "stretch",display: "flex", flexDirection: "row", alignItems: "center", gap: 10}}>
      <View>
        <Image
          height={40}
          width={40}
          borderRadius={40}
          style={{backgroundColor: tintColor}}
          alt="A"
          source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}
        />
        {/* <Text></Text> */}
      </View>
      <View>
        <Text style={{ color: tintColor,fontWeight: "bold" }}>Welcome!</Text>
        <Text style={{color: tintColor, fontSize: 12}}>Abhinay chaturvedi</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default CustomHeader;
