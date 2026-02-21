import { useAuth } from "@/context/auth";
import FormLogin from "@/src/components/form/FormLogin";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = () => {};

  return (
    <SafeAreaView className="flex-1 px-8 bg-surface-page flex-col justify-between ">
      <View className="flex-1 flex">
        <View className="flex items-center flex-row  justify-center gap-x-4 mt-8 ">
          <Image
            source={require("../../assets/images/icon.png")}
            className="w-12 h-12 rounded-xl"
          />
        </View>

        <View className="mt-24 bg-surface-card-darker">
          <Text className="typo-h1 mb-0">
            Bem vindo de <Text className="text-txt-action">volta</Text>{" "}
          </Text>
          <Text className="typo-body-md">Vamos continuar nossa jornada</Text>

          <Text className="typo-big-title">typo-big-title</Text>
          <Text className="typo-title">typo-title</Text>
          <Text className="typo-subtitle">typo-subtitle</Text>
          <Text className="typo-body">typo-body</Text>
          <Text className="typo-disabled">typo-disabled</Text>
          <Text className="typo-placeholder">typo-placeholder</Text>
          <Text className="typo-labels">typo-labels</Text>
          <Text className="typo-success">typo-success</Text>
          <Text className="typo-warning">typo-warning</Text>
          <Text className="typo-info">typo-info</Text>
          <Text className="typo-error">typo-error</Text>
        </View>

        <FormLogin />

        <TouchableOpacity
          onPress={signIn}
          className="bg-action px-8 py-3 rounded-lg mt-8 flex items-center justify-center"
        >
          <Text className=" font-bold text-lg text-txt-on-action">Entrar</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-6">
        <Text className="typo-body">Não tem conta? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
          <Text className="typo-body  font-bold text-primary">Crie agora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
