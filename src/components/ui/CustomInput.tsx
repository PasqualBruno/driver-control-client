import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type CustomInputProps = TextInputProps & {
  label?: string;
};

export function CustomInput({ label, className, ...rest }: CustomInputProps) {
  return (
    <View className="mb-4">
      {label && <Text className="typo-subtitle mb-2 font-medium">{label}</Text>}

      <View className="bg-card h-14 rounded-xl px-4 justify-center border border-border focus:border-primary">
        <TextInput
          className={`typo-input h-full ${className}`}
          placeholderTextColor="#9CA3AF"
          {...rest}
        />
      </View>
    </View>
  );
}
