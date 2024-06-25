import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Input } from "./ui";
import { useThemeColor } from "@/hooks/useThemeColor";
type ItemData = {
  id: string;
  title: string;
};

const SelectDropDownWithSearch = ({
  placeHolder = "Enter",
  data = [],
  onSelect = () => null,
}: {
  placeHolder?: string;
  data: ItemData[];
  onSelect: (item: ItemData) => any;
}) => {
  const backgroundColor = useThemeColor({}, "background");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleFocus = () => {
    setIsDropDownOpen(true);
    console.log("hello from the drop down side");
  };
  return (
    <View style={{ display: "flex" }}>
      <Input onFocus={handleFocus} placeHolder={placeHolder} />
      {isDropDownOpen && (
        <FlatList
          data={data}
          style={{
            height: 200,
            borderColor: "white",
            borderWidth: 1,
            zIndex: 20,
            backgroundColor: backgroundColor,
            borderRadius: 3,
            width: "100%",
            position: "absolute",
            top: 49,
            // padding: 20,
            overflow: "hidden",
          }}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              onSelect={onSelect}
              setIsDropDownOpen={setIsDropDownOpen}
            />
          )}
          keyExtractor={(item) => item.id}
          // extraData={selectedId}
        />
      )}
      <Text style={{ color: "white" }}>hello</Text>
    </View>
  );
};

export default SelectDropDownWithSearch;

const RenderItem = ({
  item,
  setIsDropDownOpen,
  onSelect = () => null,
}: {
  item: ItemData;
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (item: ItemData) => any;
}) => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const onPress = () => {
    setIsDropDownOpen(false);
    onSelect(item);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        // backgroundColor: backgroundColor,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: textColor,
        borderTopColor: textColor,
        // marginBottom: 2
      }}
    >
      <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
