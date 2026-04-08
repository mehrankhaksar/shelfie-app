import { StyleSheet, useColorScheme, View } from "react-native";
import { colors } from "../constants/colors";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.bg.elevated,
        },
        styles.base,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  base: {
    padding: 20,
    alignItems: "center",
    borderRadius: 8,
  },
});
