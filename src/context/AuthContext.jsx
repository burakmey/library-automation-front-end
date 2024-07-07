import { createContext, useState, useEffect } from "react";
import { UserData } from "../contracts/UserData";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("AuthContext mounted!");

  const [userData, setUserData] = useState(null);
  const updateUserData = (response) => {
    const user = new UserData(response);
    setUserData(user);
    //console.log(user);
  };
  const updateUserDesires = (response) => {
    const user = new UserData(userData);
    user.desires = response;
    setUserData(user);
  };
  const updateUserReservations = (response) => {
    const user = new UserData(userData);
    user.userBookReserves = response;
    setUserData(user);
  };
  const updateUserBorrows = (response) => {
    const user = new UserData(userData);
    user.userBookBorrows = response;
    setUserData(user);
  };
  const values = { userData, updateUserData, updateUserDesires, updateUserReservations, updateUserBorrows };

  useEffect(() => {
    return () => console.log("AuthContext unmounted!");
  }, []);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
