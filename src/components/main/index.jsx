import { StyledBtnBack } from "../../styles/btnBack";
import { StyledContainer } from "../../styles/container";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <div className="divMain">
          <section className="sectionAdd">
            <h2>Tecnologias</h2>
            <StyledBtnBack size="btnAdd">+</StyledBtnBack>
          </section>
        </div>
      </StyledContainer>
    </StyledMain>
  );
};
