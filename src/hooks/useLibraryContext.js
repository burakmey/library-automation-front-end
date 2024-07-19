import { useContext } from "react";
import LibraryContext from "../context/LibraryContext";

const useLibraryContext = () => {
  return useContext(LibraryContext);
};

export default useLibraryContext;
