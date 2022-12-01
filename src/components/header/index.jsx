import { StyledHeader } from "./styles";
import { StyledContainer } from "../../styles/container";

export const Header = ({ user }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="userInfo">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
