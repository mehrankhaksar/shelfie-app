import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";

export default function UserOnly({ children }) {
  const { user, isAuthChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecked && !user) {
      router.replace("/login");
    }
  }, [isAuthChecked, user]);

  if (!isAuthChecked || !user) return <ThemedLoader />;

  return children;
}
