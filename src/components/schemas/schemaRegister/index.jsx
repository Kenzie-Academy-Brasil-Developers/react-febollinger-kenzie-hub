import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório").min(3, "mínimo de 3 letras."),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email digitado é inválido."),
  password: yup
    .string()
    .required("Digite uma senha válida")
    .min(8, "A senha deve ter ao menos 8 caracteres.")
    .matches(/(?=.*[a-z])/, "necessário ter uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "necessário ter uma letra maiúscula")
    .matches(/(?=.*[$*&@#])/, "necessário ter um caractere especial"),
  confirmPassword: yup
    .string()
    .required("As senhas devem ser iguais")
    .oneOf([yup.ref("password"), null], "As senhas não combinam"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Número obrigatório"),
  course_module: yup.string().required("Por favor, selecione um módulo"),
});
