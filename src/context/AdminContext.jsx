import { createContext, useState, useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useAdminService from "../services/useUserService";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [usersDesires, setUsersDesires] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);
  const { user } = useAuthContext();
  const { getAllDesires, getBorrowedBooks, getReservedBooks } = useAdminService();

  const deleteUserDesire = (desireId) => {
    const updatedDesires = usersDesires.filter((item) => item.id !== desireId);
    if (updatedDesires.length === 0) setUsersDesires(null);
    else setUsersDesires(updatedDesires);
  };

  const values = {
    usersDesires,
    borrowedBooks,
    reservedBooks,
    deleteUserDesire,
  };

  useEffect(() => {
    console.log("AdminContext mounted!");
    const fetchData = async () => {
      try {
        const [desires, borrowed, reserved] = await Promise.all([getAllDesires(), getBorrowedBooks(), getReservedBooks()]);
        setUsersDesires(desires);
        setBorrowedBooks(borrowed);
        setReservedBooks(reserved);
      } catch (error) {
        console.error(error);
      }
    };
    if (user?.role === "Admin") fetchData();
    return () => {
      console.log("AdminContext unmounted!");
    };
  }, [user]);

  return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>;
};

export default AdminContext;
