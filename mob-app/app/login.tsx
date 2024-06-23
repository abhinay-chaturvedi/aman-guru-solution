import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getDimension } from "@/utils";
import Logo from "@/components/logo";
import { CustomButton, Input } from "@/components/ui";
import { LockIcon, MailIcon } from "@/components/navigation/icons";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";

const Login = () => {
  const iconColor = useThemeColor({}, "icon");
  const router = useRouter();
  return (
    <ScrollView>
      <View style={{}}>
        <View style={{ display: "flex", paddingHorizontal: 20 }}>
          {/* <Text>login</Text>
           */}

          <View
            style={{
              display: "flex",
              gap: 20,
              marginTop: 200,
              marginBottom: 40,
            }}
          >
            {/* Here i will show a logo */}
            <Logo />
            <Input
              placeHolder="Enter Your Email"
              LeftIcon={() => <MailIcon color={iconColor} />}
            />
            <Input
              placeHolder="Enter Your Password"
              LeftIcon={() => <LockIcon color={iconColor} />}
            />
            <CustomButton title={"Sign In"} />
            <View style={{display: "flex", flexDirection: "row",gap: 5, alignItems: "center"}}>
              <Text style={{color: "gray", fontWeight: "bold"}}>Don't Have an account?</Text>
              <CustomButton btnStyle={{fontSize:8, padding: 3, borderRadius: 5}} title="Register"/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
