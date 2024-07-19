import { createContext, useEffect } from "react";
import { getBook, searchBook } from "../services/libraryService";
import { GetBookResponse, SearchResultResponse } from "../models/library/libraryModels";

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const libraryGetBook = async (getBookRequest) => {
    await getBook(getBookRequest).then((getBookResponse) => new GetBookResponse(getBookResponse));
  };
  const librarySearchBook = async (searchBookRequest) => {
    await searchBook(searchBookRequest).then((searchResultResponse) => new SearchResultResponse(searchResultResponse));
  };

  const values = { libraryGetBook, librarySearchBook };

  useEffect(() => {
    console.log("LibraryContext mounted!");
    return () => console.log("LibraryContext unmounted!");
  }, []);

  return <LibraryContext.Provider value={values}>{children}</LibraryContext.Provider>;
};

export default LibraryContext;
