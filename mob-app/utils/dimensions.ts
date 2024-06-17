import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const getDimension = (property: string) => {
  if (property == "width") return width;
  if (property == "height") return height;
  return null;
};

