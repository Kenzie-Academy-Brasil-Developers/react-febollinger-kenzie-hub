import { StyledContainer } from "../../styles/container";
import { StyledNav } from "./styles";
import { StyledBtnBack } from "../../styles/btnBack";

import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Nav = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("@userToken");
    localStorage.removeItem("@userId");
    setUser(null);

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
