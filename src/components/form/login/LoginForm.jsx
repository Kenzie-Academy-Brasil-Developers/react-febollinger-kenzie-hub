import { ButtonStyled } from "../../../styles/button";
import { StyledFormLogin } from "../login/formLogin";

import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const btnRegisterPage = (e) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <>
      <h2>Login</h2>
      <StyledFormLogin>
        <label htmlFor="emailLogin">Email</label>
        <input
          type="email"
          name="emailLogin"
          id="emailLogin"
          placeholder="Digite seu email"
        />
        <label htmlFor="passwordLogin">Senha</label>
        <input
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          placeholder="Digite sua senha"
        />
        <ButtonStyled type="submit" buttonColor="entrar">
          Entrar
        </ButtonStyled>
      </StyledFormLogin>
      <div>
        <span>Ainda não possui uma conta?</span>
        <ButtonStyled
          type="submit"
          buttonColor="cadastrar"
          onClick={btnRegisterPage}
        >
          Cadastre-se
        </ButtonStyled>
      </div>
    </>
  );
};
