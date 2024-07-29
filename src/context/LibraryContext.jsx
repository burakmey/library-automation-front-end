import { createContext, useEffect } from "react";

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const values = {};

  useEffect(() => {
    console.log("LibraryContext mounted!");
    return () => console.log("LibraryContext unmounted!");
  }, []);

  return <LibraryContext.Provider value={values}>{children}</LibraryContext.Provider>;
};

export default LibraryContext;
