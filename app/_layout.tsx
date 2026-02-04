import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { AuthProvider, useAuth } from "../context/auth";
import "../global.css"; // Importação do CSS Global

// 1. Imports do NativeWind e SystemUI
import * as SystemUI from "expo-system-ui";
import { useColorScheme } from "nativewind";

// 2. Imports das Fontes e Splash
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import * as SplashScreen from "expo-splash-screen";

// 3. Imports de Tema do React Navigation (O motor por trás do Expo Router)
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";

// Mantém a tela de splash visível enquanto carregamos fontes e sessão
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // 4. Configuração das Cores Exatas do seu CSS
  // Isso garante que o navegador tenha a mesma cor das suas telas
  const THEME_COLORS = {
    dark: "#121215", // Sua cor --background do modo Dark
    light: "#F2F4F7", // Sua cor --background do modo Light
  };

  // Criação dos temas para o Navigation
  const MyDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: THEME_COLORS.dark, // Pinta o fundo da animação
    },
  };

  const MyLightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: THEME_COLORS.light, // Pinta o fundo da animação
    },
  };

  // 5. Efeito Principal: Controla a cor do Sistema e o Redirecionamento
  useEffect(() => {
    // A: Pinta a raiz do sistema (atrás de tudo) para evitar flash branco
    const activeColor =
      colorScheme === "dark" ? THEME_COLORS.dark : THEME_COLORS.light;

    SystemUI.setBackgroundColorAsync(activeColor);

    // B: Lógica de Proteção de Rotas (Auth)
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      // Se não tá logado e tenta acessar app -> Login
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      // Se tá logado e tenta acessar login -> Home
      router.replace("/(app)");
    }
  }, [user, isLoading, segments, colorScheme]);

  return (
    // ThemeProvider remove o flash branco da animação de slide
    <ThemeProvider value={colorScheme === "dark" ? MyDarkTheme : MyLightTheme}>
      {/* View com a classe do tema injeta as variáveis CSS para o NativeWind */}
      <View className={`flex-1 ${colorScheme}`}>
        <Slot />
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  // 6. Carregamento das Fontes
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  // Esconde a Splash Screen apenas quando a fonte carregar
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Enquanto a fonte não carrega, retorna null (mantém a Splash nativa)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
