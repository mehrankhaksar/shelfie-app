import { ActivityIndicator, StyleSheet, useColorScheme } from "react-native";
import ThemedView from "./ThemedView";
import { colors } from "../constants/colors";

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <ThemedView style={styles.container} safe>
      <ActivityIndicator size="large" color={theme.text.secondary} />
    </ThemedView>
  );
};

export default ThemedLoader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
