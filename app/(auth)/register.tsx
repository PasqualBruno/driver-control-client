import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
// Se estiver usando ícones: import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-6 pt-12 bg-background">
      {/* Botão Voltar Customizado */}
      <TouchableOpacity onPress={() => router.back()} className="mb-6">
        <Text className="typo-body font-bold text-primary">← Voltar</Text>
      </TouchableOpacity>

      {/* ... Resto do registro ... */}
    </View>
  );
}
