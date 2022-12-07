import { StyledButton } from "../../../styles/button";
import { StyledFormLogin } from "../login/formLogin";
import { LinkStyled } from "../../../styles/link";

import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export const LoginForm = () => {
  const { handleSubmit, handleLogin, register, errors, loading } =
    useContext(UserContext);

  return (
    <>
      <h2>Login</h2>
      <StyledFormLogin onSubmit={handleSubmit(handleLogin)} noValidate>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <StyledButton type="submit" buttonColor="entrar">
          {loading ? "Entrando ..." : "Entrar"}
        </StyledButton>
      </StyledFormLogin>
      <div>
        <span>Ainda não possui uma conta?</span>
        <LinkStyled color="cadastrar" to="/register">
          Cadastrar
        </LinkStyled>
      </div>
    </>
  );
};
