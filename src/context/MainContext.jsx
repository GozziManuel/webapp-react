import { createContext, useContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const value = { isLoading, setIsLoading };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const useMainContext = () => {
  return useContext(MainContext);
};

export { MainContextProvider, useMainContext };
