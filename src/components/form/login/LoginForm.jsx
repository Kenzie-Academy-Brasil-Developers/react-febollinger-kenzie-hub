import { ButtonStyled } from "../../../styles/button";
import { StyledFormLogin } from "../login/formLogin";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { Api } from "../../../services";
import { schemaLogin } from "../../schemas/schemaLogin";

export const LoginForm = ({ setUser, loading, setLoading }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

  const btnRegisterPage = (e) => {
    e.preventDefault();

    navigate("/register");
  };

  const loginUser = async (formDate) => {
    // const token = localStorage.getItem("@userToken");
    // const id = localStorage.getItem("@userId");

    try {
      setLoading(true);

      const result = await Api.post("/sessions", formDate);
      window.localStorage.setItem("@userToken", result.data.token);
      window.localStorage.setItem("@userId", result.data.user.id);

      setUser(result.data.user);

      toast.success("Login realizado com sucesso");

      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (date) => {
    loginUser(date);

    reset();
  };

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

        <ButtonStyled type="submit" buttonColor="entrar">
          {loading ? "Entrando ..." : "Entrar"}
        </ButtonStyled>
      </StyledFormLogin>
      <div>
        <span>Ainda não possui uma conta?</span>
        <ButtonStyled
          type="submit"
          buttonColor="cadastrar"
          onClick={btnRegisterPage}
        >
          Cadastrar
        </ButtonStyled>
      </div>
    </>
  );
};
