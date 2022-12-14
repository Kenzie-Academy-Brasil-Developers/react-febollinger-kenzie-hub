import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";

import { AiOutlineClose } from "react-icons/ai";

import { StyledEditModal } from "./styles";
import { FormModalEdit } from "../../form/modalEdit";

export const EditModal = () => {
  const { showModalDlt, setShowModalDlt } = useContext(TechContext);

  return (
    <StyledEditModal>
      <div>
        <h3>Detalhes da Tecnologia</h3>
        <span onClick={() => setShowModalDlt(!showModalDlt)}>
          <AiOutlineClose />
        </span>
      </div>
      <FormModalEdit />
    </StyledEditModal>
  );
};
