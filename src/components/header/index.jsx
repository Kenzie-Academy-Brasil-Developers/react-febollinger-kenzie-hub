import { StyledHeader } from "./styles";
import { StyledContainer } from "../../styles/container";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="userInfo">
          <h2>Olá, Fernanda</h2>
          <p>Primeiro módulo</p>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
