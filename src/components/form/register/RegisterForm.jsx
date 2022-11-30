import { ButtonStyled } from "../../../styles/button";

import { useNavigate } from "react-router-dom";
import { StyledFormRegister } from "../register/formRegister";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const btnLoginPage = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa.</p>
      <StyledFormRegister>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="" />

        <label htmlFor="emailRegister">Email</label>
        <input
          type="email"
          name="emailRegister"
          id="emailRegister"
          placeholder=""
        />

        <label htmlFor="passwordRegister">Senha</label>
        <input
          type="password"
          name="passwordRegister"
          id="passwordRegister"
          placeholder=""
        />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder=""
        />

        <label htmlFor="bio">Bio</label>
        <input type="text" name="bio" id="bio" placeholder="" />

        <label htmlFor="contact">Contato</label>
        <input type="text" name="contact" id="contact" placeholder="" />

        <label>Selecionar módulo</label>
        <select name="" id="">
          <option value="first">Primeiro Módulo</option>
          <option value="second">Segundo Módulo</option>
          <option value="third">Terceiro Módulo</option>
          <option value="fourth">Quarto Módulo</option>
        </select>

        <ButtonStyled type="submit" buttonColor="entrar" onClick={btnLoginPage}>
          Cadastrar
        </ButtonStyled>
      </StyledFormRegister>
    </>
  );
};
