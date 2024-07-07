import { createContext, useState, useEffect } from "react";
import { UserDesire } from "../contracts/UserDesire";
import useAuthContext from "../hooks/useAuthContext";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { BorrowedBook } from "../contracts/BorrowedBook";
import { ReservedBook } from "../contracts/ReservedBook";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  console.log("AdminContext mounted!");

  const [usersDesires, setUsersDesires] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState(null);
  const [reservedBooks, setReservedBooks] = useState(null);
  const { userData } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();

  const updateUsersDesires = (response) => {
    const desires = response.map((item) => new UserDesire(item));
    setUsersDesires(desires);
  };
  const updateBorrowedBooks = (response) => {
    const borrows = response.map((item) => new BorrowedBook(item));
    setBorrowedBooks(borrows);
  };
  const updateReservedBooks = (response) => {
    const reserves = response.map((item) => new ReservedBook(item));
    setReservedBooks(reserves);
  };
  const deleteUserDesire = (desireId) => {
    const updatedDesires = usersDesires.filter((item) => item.id !== desireId);
    if (updatedDesires.length === 0) setUsersDesires(null);
    else setUsersDesires(updatedDesires);
  };

  const values = { usersDesires, borrowedBooks, reservedBooks, deleteUserDesire };

  useEffect(() => {
    const fetchDesires = async () => {
      try {
        const desireURL = process.env.REACT_APP_ADMIN_GET_ALL_DESIRES_URL;
        const response = await axiosPrivate.post(desireURL);
        updateUsersDesires(response.data.usersDesires);
      } catch (error) {
        //console.error("Failed to fetch desires:", error);
      }
    };
    const fetchBorrowedBooks = async () => {
      try {
        const borrowURL = process.env.REACT_APP_ADMIN_GET_BORROWED_BOOKS_URL;
        const response = await axiosPrivate.post(borrowURL);
        //console.log(response.data);
        updateBorrowedBooks(response.data.userBookBorrows);
      } catch (error) {
        //console.error("Failed to fetch desires:", error);
      }
    };
    const fetchReservedBooks = async () => {
      try {
        const reserveURL = process.env.REACT_APP_ADMIN_GET_RESERVED_BOOKS_URL;
        const response = await axiosPrivate.post(reserveURL);
        //console.log(response.data);
        updateReservedBooks(response.data.userBookReserves);
      } catch (error) {
        //console.error("Failed to fetch desires:", error);
      }
    };
    if (userData?.role === "Admin") {
      fetchDesires();
      fetchBorrowedBooks();
      fetchReservedBooks();
    }
    return () => {
      console.log("AdminContext unmounted!");
    };
  }, [userData, axiosPrivate]);

  return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>;
};

export default AdminContext;
