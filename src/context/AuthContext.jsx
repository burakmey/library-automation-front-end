import { createContext, useState, useEffect } from "react";
import { login, refresh, register } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authLogin = async (loginRequest) => {
    await login(loginRequest).then((userData) => setUser(userData));
  };

  const authRefresh = async () => {
    // Works like useRefreshToken.
    await refresh().then((userData) => setUser(userData));
  };

  const authRegister = async (registerRequest) => {
    // Do auto login after registering.
    await register(registerRequest).then((userData) => setUser(userData));
  };

  const values = { user, authLogin, authRefresh, authRegister };

  useEffect(() => {
    console.log("AuthContext mounted!");
    return () => console.log("AuthContext unmounted!");
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
