import { CiTrash } from "react-icons/ci";
import { StyledCard } from "./styles";

export const Card = ({ index, title, status }) => (
  <StyledCard key={index}>
    <h2>{title}</h2>
    <div>
      <h3>{status}</h3>
      <button type="submit">
        <CiTrash />
      </button>
    </div>
  </StyledCard>
);
