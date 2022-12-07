import { StyledHeader } from "./styles";
import { StyledContainer } from "../../styles/container";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Header = () => {
  const { user } = useContext(UserContext);
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
