import { createContext, useEffect } from "react";
import { borrowBook, borrowReservedBook, returnBook, reserveBook, cancelDesire } from "../services/userService";
import { ReserveResponse, SendDesireResponse } from "../models/user/userModels";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userBorrowBook = async (bookRequest) => {
    await borrowBook(bookRequest).then((sendDesireResponse) => new SendDesireResponse(sendDesireResponse));
  };
  const userBorrowReservedBook = async (bookRequest) => {
    await borrowReservedBook(bookRequest).then((sendDesireResponse) => new SendDesireResponse(sendDesireResponse));
  };
  const userReturnBook = async (bookRequest) => {
    await returnBook(bookRequest).then((sendDesireResponse) => new SendDesireResponse(sendDesireResponse));
  };
  const userReserveBook = async (bookRequest) => {
    await reserveBook(bookRequest).then((reserveResponse) => new ReserveResponse(reserveResponse));
  };
  const userCancelDesire = async (desireRequest) => {
    await cancelDesire(desireRequest).then((sendDesireResponse) => new SendDesireResponse(sendDesireResponse));
  };

  const values = { userBorrowBook, userBorrowReservedBook, userReturnBook, userReserveBook, userCancelDesire };

  useEffect(() => {
    console.log("UserContext mounted!");
    return () => console.log("UserContext unmounted!");
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
