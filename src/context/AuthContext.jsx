import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("AuthContext mounted!");

  const [userData, setUserData] = useState(null);
  const values = { userData, setUserData };

  useEffect(() => {
    return () => console.log("App unmounted!");
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
