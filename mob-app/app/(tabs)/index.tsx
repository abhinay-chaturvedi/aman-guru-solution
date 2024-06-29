import {
  Image,
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Redirect } from "expo-router";
import { Input } from "@/components/ui";
// import Brand from "@/components/SelectDropDownWithSearch";
import SelectDropDownWithSearch from "@/components/SelectDropDownWithSearch";
type ItemData = {
  id: string;
  title: string;
};
const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7",
    title: "Third Item",
  },
];
export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (!isLoggedIn) {
    return <Redirect href={"/register"} />;
  }
  const handleBrandSelect = (item: ItemData) => {
    console.log(item)
  }
  return (
    <View style={{}}>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
      <View style={{ margin: 10 }}>
        <SelectDropDownWithSearch onSelect={handleBrandSelect} data={DATA} placeHolder="Select Brand" />
        <SelectDropDownWithSearch onSelect={handleBrandSelect} data={DATA} placeHolder="Select Model" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
