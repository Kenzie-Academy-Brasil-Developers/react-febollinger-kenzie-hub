import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";
import { FormModal } from "../../form/modal";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export const CreateModal = () => {
  const { showModal, setShowModal } = useContext(TechContext);
  return (
    <StyledModal className="modalAdd">
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <span onClick={() => setShowModal(!showModal)}>
          <AiOutlineClose />
        </span>
      </div>
      <FormModal />
    </StyledModal>
  );
};
