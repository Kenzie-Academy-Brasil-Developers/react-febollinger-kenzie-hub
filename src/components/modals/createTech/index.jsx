import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";

import { StyledModalAdd } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FormModalAdd } from "../../form/modalAdd";

export const CreateModal = () => {
  const { showModalAdd, setShowModalAdd } = useContext(TechContext);
  return (
    <StyledModalAdd className="modalAdd">
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <span onClick={() => setShowModalAdd(!showModalAdd)}>
          <AiOutlineClose />
        </span>
      </div>
      <FormModalAdd />
    </StyledModalAdd>
  );
};
