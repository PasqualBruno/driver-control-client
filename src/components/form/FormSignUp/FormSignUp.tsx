import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { CustomInput } from "../../ui/CustomInput";
import { formSignUpSchema, FormSignUpSchema } from "./FormSignUpSchema";

const FormSignUp = () => {
  const { control, handleSubmit } = useForm<FormSignUpSchema>({
    resolver: zodResolver(formSignUpSchema),
  });

  async function onSubmit(data: FormSignUpSchema) {
    console.log(data);
  }

  return (
    <View>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <CustomInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Seu nome completo"
            label="Nome completo"
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Seu e-mail"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Sua senha"
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Confirme sua senha"
          />
        )}
      />

      <Button
        title="Cadastrar"
        onPress={handleSubmit(onSubmit, (errors) =>
          console.log("ERROS:", errors),
        )}
      />
    </View>
  );
};

export default FormSignUp;

const styles = StyleSheet.create({});
