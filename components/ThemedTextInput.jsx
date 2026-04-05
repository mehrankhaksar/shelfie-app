import { StyleSheet, TextInput, useColorScheme } from "react-native";
import { colors } from "../constants/colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.bg.elevated,
          color: theme.text.secondary,
        },
        styles.base,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  base: {
    padding: 20,
    borderRadius: 6,
  },
});
