import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Nav } from "../../components/nav";

export const Dash = ({ user, setUser }) => {
  return (
    <>
      <Nav setUser={setUser} />
      <Header user={user} />
      <Main />
    </>
  );
};
