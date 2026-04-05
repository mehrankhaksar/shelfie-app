import { Pressable, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.base, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.brand.primary,
    padding: 18,
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.5,
  },
});
