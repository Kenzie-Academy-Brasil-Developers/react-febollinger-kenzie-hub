import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(8, "A senha deve ter ao menos 8 caracteres.")
    .matches(/(?=.*[a-z])/, "necessário ter uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "necessário ter uma letra maiúscula")
    .matches(/(?=.*[$*&@#])/, "necessário ter um caractere especial"),
});
