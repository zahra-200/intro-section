import { createContext, useState } from "react";
import Home from "./pages/Home";

export const AppContext = createContext();
function App() {
  const [dropDownFeature, setDropDownFeature] = useState(false);
  const [dropDownCompony, setDropDownCompony] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  return (
    <AppContext.Provider
      value={{
        setDropDownFeature,
        setDropDownCompony,
        dropDownCompony,
        dropDownFeature,
        hamburger,
        setHamburger,
      }}
    >
      <div
        className={
          hamburger
            ? "bg-black bg-opacity-40 transition-all duration-200 lg:bg-inherit"
            : ""
        }
      >
        <Home />;
      </div>
    </AppContext.Provider>
  );
}

export default App;
