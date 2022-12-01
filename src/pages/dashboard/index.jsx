import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Nav } from "../../components/nav";

export const Dash = ({ user }) => {
  return (
    <>
      <Nav />
      <Header user={user} />
      <Main />
    </>
  );
};
