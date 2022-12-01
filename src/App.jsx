import { useState } from "react";
import { RoutesPage } from "./routes";
import { GlobalStyled } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <GlobalStyled />
      <RoutesPage user={user} setUser={setUser} />
      <ToastContainer />
    </div>
  );
};
