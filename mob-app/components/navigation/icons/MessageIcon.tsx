import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
export const MessageIcon = ({color}: {color: string}) => {
  // return <MaterialCommunityIcons name="face-man-profile" size={28} color={color} />
  return <Ionicons name="chatbox-ellipses" size={28} color={color} />
};
