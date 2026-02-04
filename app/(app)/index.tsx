import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/auth";

export default function Home() {
  const { signOut, user } = useAuth();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background  ">
      <View className="bg-background">
        <Text className="text-2xl font-bold text-txt-primary    mb-2">
          Olá, {user?.name}! 👋
        </Text>
      </View>

      <TouchableOpacity
        onPress={toggleColorScheme}
        className="mb-4  px-6 py-2 rounded-lg bg-card"
      >
        <Text className="text-txt-primary font-bold">Mudar Tema 🌗</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={signOut}
        className="bg-red-500 px-6 py-2 rounded-lg"
      >
        <Text className="text-white font-bold">Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
