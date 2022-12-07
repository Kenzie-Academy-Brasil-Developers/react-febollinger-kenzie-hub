import { useContext } from "react";

import { TechContext } from "../../contexts/techContext";
import { StyledBtnBack } from "../../styles/btnBack";
import { StyledContainer } from "../../styles/container";
import { CreateModal } from "../modals/createTech";
import { Card } from "../techCard";
import { StyledMain } from "./styles";

export const Main = () => {
  const { showModal, setShowModal, tech } = useContext(TechContext);
  return (
    <StyledMain className="blur">
      <StyledContainer>
        <div className="divMain">
          <section className="sectionAdd">
            <h2>Tecnologias</h2>
            <StyledBtnBack size="btnAdd" onClick={() => setShowModal(true)}>
              +
            </StyledBtnBack>
          </section>
          {showModal && <CreateModal />}
          <section className="sectionList">
            <ul>
              {tech.map((e, i) => (
                <Card index={i} title={e.title} status={e.status} />
              ))}
            </ul>
          </section>
        </div>
      </StyledContainer>
    </StyledMain>
  );
};
