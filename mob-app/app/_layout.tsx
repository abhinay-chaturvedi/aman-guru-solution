import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { Text } from "react-native";
import CustomHeader from "@/components/CustomHeader";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Home",
            headerTitle: ({ tintColor }) => (
              <CustomHeader tintColor={tintColor ?? "white"} />
            ),
          }}
        />
        <Stack.Screen options={{headerShown: false}} name="register" />
        <Stack.Screen options={{headerShown: false}} name="login" />
        <Stack.Screen options={{headerTitle: "Profile"}} name="profile" />

        <Stack.Screen  name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
