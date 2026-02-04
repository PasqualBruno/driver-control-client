import { useAuth } from "@/context/auth";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuth();

  const handleLogin = () => {};

  return (
    <SafeAreaView className="flex-1 px-8">
      <Text className="text-2xl font-bold mb-8 text-txt-title ">
        Motorista App
      </Text>

      <TouchableOpacity
        onPress={signIn}
        className="bg-primary px-8 py-3 rounded-lg"
      >
        <Text className=" font-bold text-lg">Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
