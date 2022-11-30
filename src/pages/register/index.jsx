import logo from "../../assets/logo.png";

import { RegisterForm } from "../../components/form/register/RegisterForm";
import { StyledBtnBack } from "../../styles/btnBack";
import { StyledDivRegister } from "./containerRegister";

import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const btnLoginPage = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <StyledDivRegister>
      <section className="sectionLogoRegister">
        <div>
          <img src={logo} alt="Kenzie hub" />
          <StyledBtnBack type="submit" onClick={btnLoginPage}>
            Voltar
          </StyledBtnBack>
        </div>
      </section>
      <section className="sectionForm" height="formRegister">
        <RegisterForm />
      </section>
    </StyledDivRegister>
  );
};
