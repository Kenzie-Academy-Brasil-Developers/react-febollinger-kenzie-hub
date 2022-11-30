import { RoutesPage } from "./routes";
import { GlobalStyled } from "./styles/global";


export const App = () => {
  return (
    <div className="App">
      <GlobalStyled />
      <RoutesPage />
    </div>
  );
}