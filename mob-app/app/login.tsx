import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getDimension } from "@/utils";
import Logo from "@/components/logo";
import { Input } from "@/components/ui";
import { MailIcon } from "@/components/navigation/icons";
import {useColorScheme} from "@/hooks/useColorScheme"
import { Colors } from "@/constants/Colors";

const Login = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={{}}>
      <View style={{ height: getDimension("height"),display: "flex", justifyContent: "center",paddingHorizontal: 20 }}>
        {/* <Text>login</Text>
       */}
       <View style={{height: 100}}>
        {/* Here i will show a logo */}
        <Logo/>
        <Input InputIcon={() => <MailIcon color={Colors[colorScheme ?? "light"].icon}/>}/>
       </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
