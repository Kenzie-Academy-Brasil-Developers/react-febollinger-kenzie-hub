import logo from "../../assets/logo.png";

import { RegisterForm } from "../../components/form/register/RegisterForm";

import { StyledDivRegister } from "./containerRegister";
import { LinkStyled } from "../../styles/link";

export const Register = ({ loading, setLoading }) => {
  return (
    <>
      <StyledDivRegister>
        <section className="sectionLogoRegister">
          <div>
            <img src={logo} alt="Kenzie hub" />
            <LinkStyled to="/" color="back">
              Voltar
            </LinkStyled>
          </div>
        </section>
        <section className="formRegister">
          <RegisterForm loading={loading} setLoading={setLoading} />
        </section>
      </StyledDivRegister>
    </>
  );
};
