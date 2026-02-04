import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useColorScheme, View } from "react-native";
import { AuthProvider, useAuth } from "../context/auth";
import "../global.css";

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      router.replace("/(app)");
    }
  }, [user, isLoading, segments]);

  return (
    <View className={`flex-1 ${colorScheme}`}>
      <Slot />
    </View>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
