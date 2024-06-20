import { createContext, useState, useEffect } from "react";
import { UserData } from "../contracts/UserData";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("AuthContext mounted!");

  const [userData, setUserData] = useState(null);
  const updateUserData = (response) => {
    const user = new UserData(response);
    setUserData(user);
  };
  const values = { userData, updateUserData };

  useEffect(() => {
    return () => console.log("App unmounted!");
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
