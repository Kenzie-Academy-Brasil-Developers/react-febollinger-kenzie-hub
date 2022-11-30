import { ButtonStyled } from "../../../styles/button";
import { StyledFormRegister } from "../register/formRegister";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório").min(3, "mínimo de 3 letras."),
  emailRegister: yup.string().required("Email obrigatório").email(),
  passwordRegister: yup
    .string()
    .required("Digite uma senha válida")
    .min(8, "A senha deve ter ao menos 8 caracteres.")
    .matches(/(?=.*[a-z])/, "necessário ter uma letra minúscula")
    .matches(/(?=.*[A-Z])/, "necessário ter uma letra maiúscula")
    .matches(/(?=.*[$*&@#])/, "necessário ter um caractere especial"),
  confirmPassword: yup
    .string()
    .required("As senhas devem ser iguais")
    .oneOf([yup.ref("passwordRegister"), null], "As senhas não combinam"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Número obrigatório"),
  type: yup.string().required("Por favor, selecione um módulo"),
});

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const navigate = useNavigate();

  const btnLoginPage = (e) => {
    e.preventDefault();

    navigate("/");
  };

  const handleRegister = (data) => {
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa.</p>
      <StyledFormRegister onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="emailRegister">Email</label>
        <input
          type="email"
          name="emailRegister"
          id="emailRegister"
          placeholder="Digite aqui seu email"
          {...register("emailRegister")}
        />
        <p>{errors.emailRegister?.message}</p>

        <label htmlFor="passwordRegister">Senha</label>
        <input
          type="password"
          name="passwordRegister"
          id="passwordRegister"
          placeholder="Digite aqui sua senha"
          {...register("passwordRegister")}
        />
        <p>{errors.passwordRegister?.message}</p>

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="type">Selecionar módulo</label>
        <select name="type" id="type" {...register("type")}>
          <option value="first">Primeiro Módulo</option>
          <option value="second">Segundo Módulo</option>
          <option value="third">Terceiro Módulo</option>
          <option value="fourth">Quarto Módulo</option>
        </select>
        <p>{errors.type?.message}</p>

        <ButtonStyled type="submit" buttonColor="entrar">
          Cadastrar
        </ButtonStyled>
      </StyledFormRegister>
    </>
  );
};
