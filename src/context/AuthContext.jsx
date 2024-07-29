import { createContext, useState, useEffect } from "react";
import { UserProvider } from "./UserContext";
import { AdminProvider } from "./AdminContext";
import useAuthService from "../hooks/services/useAuthService";
import { LoginResponse } from "../models/auth/AuthModels";
import { MessageResponse } from "../models/common/CommonModels";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { login, refresh, register } = useAuthService();

  const authLogin = async (loginRequest) => {
    try {
      const response = await login(loginRequest);
      const loginResponse = new LoginResponse(response);
      setUser(loginResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const authRefresh = async () => {
    try {
      const response = await refresh();
      const loginResponse = new LoginResponse(response);
      setUser(loginResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const authRegister = async (registerRequest) => {
    try {
      const response = await register(registerRequest);
      const messageResponse = new MessageResponse(response);
      return messageResponse;
      //setUser(loginResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const values = { user, authLogin, authRefresh, authRegister };

  useEffect(() => {
    console.log("AuthContext mounted!");
    return () => console.log("AuthContext unmounted!");
  }, []);

  return (
    <AuthContext.Provider value={values}>
      {user ? <UserProvider>{user.role === "Admin" ? <AdminProvider>{children}</AdminProvider> : <>{children}</>}</UserProvider> : <>{children}</>}
    </AuthContext.Provider>
  );
};

export default AuthContext;
