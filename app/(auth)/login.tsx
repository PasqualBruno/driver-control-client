import { useAuth } from "@/context/auth";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuth();

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
      <View className="flex flex-row items-baseline gap-x-2 justify-center ">
        <Text className="typo-subtitle  ">Ainda nao possui uma conta?</Text>
        <TouchableOpacity className="text-txt-primary">
          <Text className="text-txt-primary flex t-body">Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
