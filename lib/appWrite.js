import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import Constants from "expo-constants";

const config = Constants.expoConfig?.extra;

if (!config) {
  throw new Error("Expo config missing (app.json extra not loaded)");
}

export const client = new Client()
  .setEndpoint(config.appwriteEndpoint)
  .setProject(config.appwriteProjectId)
  .setPlatform("com.mehrankhaksar.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
