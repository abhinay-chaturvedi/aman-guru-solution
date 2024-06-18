import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getDimension } from "@/utils";
import Logo from "@/components/logo";
import { CustomButton, Input } from "@/components/ui";
import { LockIcon, MailIcon } from "@/components/navigation/icons";

import { useThemeColor } from "@/hooks/useThemeColor";

const Login = () => {
  const iconColor = useThemeColor({}, "icon");
  return (
    <ScrollView>
    <View style={{}}>
      <View style={{display: "flex",paddingHorizontal: 20 }}>
        {/* <Text>login</Text>
       */}
       
       <View style={{display: "flex", gap: 20, marginTop: 250,marginBottom: 50}}>
        {/* Here i will show a logo */}
        <Logo/>
        <Input placeHolder="Enter Your Email" InputIcon={() => <MailIcon color={iconColor}/>}/>
        <Input placeHolder="Enter Your Password" InputIcon={() => <LockIcon color={iconColor}/>}/>
        <CustomButton title={"Sign In"}/>
       </View>
      </View>
    </View>
       </ScrollView>
    
  );
};


export default Login;

const styles = StyleSheet.create({});
