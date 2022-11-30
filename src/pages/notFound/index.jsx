import notFoundImg from "../../assets/notFound.png";
import { StyledSection } from "./styles";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const backToLogin = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <StyledSection>
      <img src={notFoundImg} alt="Page not found" />
      <h1>Page not found.</h1>
      <button type="submit" onClick={backToLogin}>
        Voltar a página de login
      </button>
    </StyledSection>
  );
};
