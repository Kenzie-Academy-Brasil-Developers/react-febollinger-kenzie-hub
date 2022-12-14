import { RoutesPage } from "./routes";
import { GlobalStyled } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/userContext";
import { TechProvider } from "./contexts/techContext";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyled />

      <UserProvider>
        <TechProvider>
          <RoutesPage />
        </TechProvider>
      </UserProvider>

      <ToastContainer />
    </div>
  );
};
