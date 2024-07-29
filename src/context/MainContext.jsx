import { createContext, useEffect } from "react";
import { LibraryProvider } from "./LibraryContext";
import { AuthProvider } from "./AuthContext";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const values = {};

  useEffect(() => {
    console.log("MainContext mounted!");
    return () => console.log("MainContext unmounted!");
  }, []);

  return (
    <MainContext.Provider value={values}>
      <LibraryProvider>
        <AuthProvider>{children}</AuthProvider>
      </LibraryProvider>
    </MainContext.Provider>
  );
};

export default MainContext;
