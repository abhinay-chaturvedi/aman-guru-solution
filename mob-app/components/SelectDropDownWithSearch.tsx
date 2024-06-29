import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
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
  const timout= useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState("");
  const [listData, setListData] = useState(data);
  const handleFocus = () => {
    setIsDropDownOpen(true);
    console.log("hello from the drop down side");
  };
  const handleInputChange = (inputValue: string) => {
    setText(inputValue);
    console.log("Input value---------", inputValue);
    // here we will implement the filter logic
    // I will try to implement debouncing here because i am not going to filter the list
    // for each character change in the input.
    if(timout.current) {
      clearInterval(timout.current)
    }
    timout.current = setTimeout(() => {
      console.log("Want to see how many times we need to call")
      setListData((prev) => {
        
        return data.filter((item) => {
          return item.title.includes(inputValue);
        });
      });
    }, 1000);
  };
  return (
    <View style={{ display: "flex" }}>
      <Input
        text={text}
        setText={handleInputChange}
        onFocus={handleFocus}
        placeHolder={placeHolder}
      />
      {isDropDownOpen && (
        <FlatList
          data={listData}
          style={{
            maxHeight: 250,
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
              setText={setText}
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
  setText = () => null,
}: {
  item: ItemData;
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (item: ItemData) => any;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const onPress = () => {
    setIsDropDownOpen(false);
    onSelect(item);
    setText(item.title);
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
