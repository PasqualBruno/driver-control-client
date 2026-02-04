import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { View } from "react-native";
import { AuthProvider, useAuth } from "../context/auth";
import "../global.css";

// 👇 1. Importe as coisas de tema do Navigation
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // 👇 2. Crie os temas customizados com AS SUAS CORES EXATAS
  // Isso garante que o fundo da animação seja idêntico ao fundo da tela
  const MyDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#121215", // Sua cor dark (--background)
    },
  };

  const MyLightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#F2F4F7", // Sua cor light (--background)
    },
  };

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
    // 👇 3. Envolva tudo com o ThemeProvider passando o tema correto
    <ThemeProvider value={colorScheme === "dark" ? MyDarkTheme : MyLightTheme}>
      <View className={`flex-1 ${colorScheme}`}>
        <Slot />
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
