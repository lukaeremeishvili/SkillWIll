import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";

export default function Index() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (segments.some((segment) => segment === "(tabs)")) {
      router.replace("/(tabs)/Chats");
    }
  }, [router, segments]);

  return null;
}
