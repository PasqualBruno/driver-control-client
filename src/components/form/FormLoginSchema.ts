import { z } from "zod";

export const formLoginSchema = z.object({
  email: z
    .string({ message: "E-mail é obrigatório" })
    .email("Formato de e-mail inválido"),

  password: z
    .string({ message: "Senha é obrigatória" })
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type FormLoginData = z.infer<typeof formLoginSchema>;
