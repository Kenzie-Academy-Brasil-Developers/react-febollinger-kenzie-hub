import { useContext } from "react";
import { FiEdit3 } from "react-icons/fi";
import { TechContext } from "../../contexts/techContext";
import { UserContext } from "../../contexts/userContext";

import { StyledCard } from "./styles";

export const Card = ({ title, status, id }) => {
  const { setShowModalDlt } = useContext(TechContext);
  const { setSelect } = useContext(UserContext);

  return (
    <StyledCard key={id}>
      <h3>{title}</h3>
      <div>
        <h4>{status}</h4>
        <button
          type="submit"
          onClick={() => {
            setShowModalDlt(true);
            setSelect(id, title);
          }}
        >
          <FiEdit3 />
        </button>
      </div>
    </StyledCard>
  );
};
