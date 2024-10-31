import { createContext, useEffect, useState } from "react";
import { ReserveResponse, SendDesireResponse } from "../models/user/UserModels";
import useUserService from "../services/useUserService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //const [desires, setDesires] = useState(null);
  const [desires, setDesires] = useState(null);
  const [reservations, setReservations] = useState(null);

  // const userBorrowBook = async (bookRequest) => {
  //   await borrowBook(bookRequest).then((sendDesireResponse) => {
  //     const response = new SendDesireResponse(sendDesireResponse);
  //     setDesires(response.desires);
  //   });
  // };
  // const userBorrowReservedBook = async (bookRequest) => {
  //   await borrowReservedBook(bookRequest).then((sendDesireResponse) => {
  //     const response = new SendDesireResponse(sendDesireResponse);
  //     setDesires(response.desires);
  //   });
  // };
  // const userReturnBook = async (bookRequest) => {
  //   await returnBook(bookRequest).then((sendDesireResponse) => {
  //     const response = new SendDesireResponse(sendDesireResponse);
  //     setDesires(response.desires);
  //   });
  // };
  // const userReserveBook = async (bookRequest) => {
  //   await reserveBook(bookRequest).then((reserveResponse) => {
  //     const response = new ReserveResponse(reserveResponse);
  //     setReservations(response.reservations);
  //   });
  // };
  // const userCancelDesire = async (desireRequest) => {
  //   await cancelDesire(desireRequest).then((sendDesireResponse) => {
  //     const response = new SendDesireResponse(sendDesireResponse);
  //     setDesires(response.desires);
  //   });
  // };

  const values = { desires, reservations };

  useEffect(() => {
    console.log("UserContext mounted!");
    return () => console.log("UserContext unmounted!");
  }, []);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
