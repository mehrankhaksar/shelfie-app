import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { StyleSheet, Text } from "react-native";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import ThemedButton from "../../components/ThemedButton";
import { Link } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle style={styles.title}>
        Login to Your Account
      </ThemedText>
      <ThemedTextInput
        style={{ width: "85%" }}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <ThemedTextInput
        style={{ width: "85%" }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ThemedButton>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>
      <Link href="/register" replace>
        <ThemedText style={{ textDecorationLine: "underline" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
