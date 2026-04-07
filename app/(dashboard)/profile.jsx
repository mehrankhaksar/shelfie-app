import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";

const Profile = () => {
  const { user } = useUser();

  return (
    <ThemedView safe>
      <Text>{user.email}</Text>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
