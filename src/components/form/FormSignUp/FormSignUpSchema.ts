import { z } from "zod";

export const formSignUpSchema = z
  .object({
    fullName: z
      .string({ message: "Nome completo é obrigatório" })
      .min(5, "O nome completo deve ter no mínimo 5 caracteres"),

    email: z
      .string({ message: "E-mail é obrigatório" })
      .email("Formato de e-mail inválido"),

    password: z
      .string({ message: "Senha é obrigatória" })
      .min(6, "A senha deve ter no mínimo 6 caracteres"),

    confirmPassword: z
      .string({ message: "Confirmação de senha é obrigatória" })
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type FormSignUpSchema = z.infer<typeof formSignUpSchema>;
