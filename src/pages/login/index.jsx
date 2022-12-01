import logo from "../../assets/logo.png";
import { LoginForm } from "../../components/form/login/LoginForm";
import { StyledDivLogin } from "./containerLogin";

export const Login = ({ user, setUser, loading, setLoading }) => {
  return (
    <>
      <StyledDivLogin>
        <section className="sectionLogoLogin">
          <img src={logo} alt="Kenzie hub" />
        </section>
        <section className="formLogin">
          <LoginForm
            setUser={setUser}
            user={user}
            loading={loading}
            setLoading={setLoading}
          />
        </section>
      </StyledDivLogin>
    </>
  );
};
