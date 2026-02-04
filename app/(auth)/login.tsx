import { useAuth } from "@/context/auth";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = () => {};

  return (
    <SafeAreaView className="flex-1 px-8 bg-background flex-col justify-between ">
      <View className="flex-1 flex">
        <View className="flex items-center flex-row  justify-center gap-x-4 mt-8 ">
          <Image
            source={require("../../assets/images/icon.png")}
            className="w-12 h-12 rounded-xl"
          />
        </View>

        <View className="mt-16">
          <Text className="typo-h1 mb-0">
            Bem vindo de <Text className="text-txt-primary">volta</Text>{" "}
          </Text>
          <Text className="typo-subtitle">Vamos continuar nossa jornada</Text>
        </View>

        <View className="flex flex-col ">
          <TextInput
            placeholder="Email"
            className="bg-card px-4 py-3 rounded-lg mt-8 text-txt-body placeholder:text-txt-secondary"
          />
          <TextInput
            placeholder="Email"
            className="bg-card px-4 py-3 rounded-lg mt-8 text-txt-body placeholder:text-txt-secondary"
          />
        </View>

        <TouchableOpacity
          onPress={signIn}
          className="bg-primary px-8 py-3 rounded-lg mt-8 flex items-center justify-center"
        >
          <Text className=" font-bold text-lg">Entrar</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-6">
        <Text className="typo-body">Não tem conta? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
          <Text className="typo-body font-bold text-primary">Crie agora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
