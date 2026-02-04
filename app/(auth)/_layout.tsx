import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function AuthLayout() {
  const { colorScheme } = useColorScheme();

  const backgroundColor =
    colorScheme === "dark"
      ? "#121215" // Seu background dark correto
      : "#F2F4F7"; // Seu background light correto

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",

        contentStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
