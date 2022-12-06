import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

export type HeaderTabProps = {
  label: string;
  active: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

export const HeaderTab: React.FC<HeaderTabProps> = ({
  active,
  label,
  style,
  onPress
}) => (
  <Pressable
    style={active ? [styles.active, style] : [styles.inactive, style]}
    onPress={onPress}
  >
    <Text style={{ color: "white", fontSize: 16 }}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  active: {
    paddingHorizontal: 2,
    paddingBottom: 5,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  }, 
  inactive: {
    paddingHorizontal: 2,
    paddingBottom: 5,
  }
})
