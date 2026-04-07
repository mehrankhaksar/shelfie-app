import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appWrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession({ email, password });
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error);
    }
  };

  const register = async (email, password) => {
    try {
      await account.create({ userId: ID.unique(), email, password });
      await login(email, password);
    } catch (error) {
      throw Error(error);
    }
  };

  const logout = async () => {
    await account.deleteSession({ sessionId: user.id });
    setUser(null);
  };

  const getInitialUser = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
      console.log(error.message);
    } finally {
      setIsAuthChecked(true);
    }
  };

  useEffect(() => {
    getInitialUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isAuthChecked, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
