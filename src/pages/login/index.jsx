import logo from "../../assets/logo.png";
import { LoginForm } from "../../components/form/login/LoginForm";
import { StyledDivLogin } from "./containerLogin";

export const Login = () => {
  return (
    <StyledDivLogin>
      <section className="sectionLogoLogin">
        <img src={logo} alt="Kenzie hub" />
      </section>
      <section className="sectionForm" height="formLogin">
        <LoginForm />
      </section>
    </StyledDivLogin>
  );
};
