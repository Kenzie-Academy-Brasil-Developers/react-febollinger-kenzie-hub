import { StyledContainer } from "../../styles/container";
import { StyledNav } from "./styles";
import { StyledBtnBack } from "../../styles/btnBack";

import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    localStorage.clear();

    navigate("/");
  };
  return (
    <StyledNav>
      <StyledContainer>
        <div className="divNav">
          <img src={logo} alt="kenzie hub" />
          <StyledBtnBack type="submit" onClick={logout}>
            Sair
          </StyledBtnBack>
        </div>
      </StyledContainer>
    </StyledNav>
  );
};
