import { StyledContainer } from "../../styles/container";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <div className="divMain">
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </StyledContainer>
    </StyledMain>
  );
};
