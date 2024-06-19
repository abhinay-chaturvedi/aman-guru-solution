import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import Logo from "@/components/logo";
import { CustomButton, Input } from "@/components/ui";
import { LockIcon, MailIcon } from "@/components/navigation/icons";
import { useRouter } from "expo-router";

const Register = () => {
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
              placeHolder="Enter Your Name"
              InputIcon={() => <MailIcon color={iconColor} />}
            />
            <Input
              placeHolder="Enter Your Email"
              InputIcon={() => <MailIcon color={iconColor} />}
            />
            <Input
              placeHolder="Enter Your Password"
              InputIcon={() => <LockIcon color={iconColor} />}
            />
            <CustomButton title={"Register"} />
            <View style={{display: "flex", flexDirection: "row",gap: 5, alignItems: "center"}}>
              <Text style={{color: "gray", fontWeight: "bold"}}>Arleady Have an account?</Text>
              <CustomButton btnStyle={{fontSize:8, padding: 3, borderRadius: 5}} title="Sign In"/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
