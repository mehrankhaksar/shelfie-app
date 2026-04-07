import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

export default function GuestOnly({ children }) {
  const { user, isAuthChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecked && user) {
      router.replace("/profile");
    }
  }, [isAuthChecked, user]);

  if (!isAuthChecked || user) return <ThemedLoader />;

  return children;
}
