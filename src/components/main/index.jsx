import { useContext } from "react";

import { TechContext } from "../../contexts/techContext";
import { UserContext } from "../../contexts/userContext";
import { StyledBtnBack } from "../../styles/btnBack";
import { StyledContainer } from "../../styles/container";
import { CreateModal } from "../modals/createTech";
import { EditModal } from "../modals/editTech";
import { Card } from "../techCard";
import { StyledMain } from "./styles";

export const Main = () => {
  const { showModalAdd, setShowModalAdd, showModalDlt } =
    useContext(TechContext);
  const { userTech } = useContext(UserContext);

  return (
    <StyledMain className="blur">
      <StyledContainer>
        <div className="divMain">
          <section className="sectionAdd">
            <h2>Tecnologias</h2>
            <StyledBtnBack size="btnAdd" onClick={() => setShowModalAdd(true)}>
              +
            </StyledBtnBack>
          </section>
          {showModalAdd && <CreateModal />}
          <section className="sectionList">
            <ul>
              {userTech.length === 0 ? (
                <h2>Cadastre uma tecnologia.</h2>
              ) : (
                userTech.map((tech) => (
                  <Card
                    key={tech.id}
                    title={tech.title}
                    status={tech.status}
                    id={tech.id}
                  />
                ))
              )}
            </ul>
          </section>
          {showModalDlt && <EditModal />}
        </div>
      </StyledContainer>
    </StyledMain>
  );
};
