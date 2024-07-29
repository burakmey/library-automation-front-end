import { useCallback } from "react";
import { library } from "../constants/ApiEndpoints";
import useApi from "../hooks/useApi";

const useLibraryService = () => {
  const api = useApi();

  const getBook = useCallback(
    async (getBookRequest) => {
      try {
        const response = await api.get(library.getBook, { params: getBookRequest });
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const searchBook = useCallback(
    async (searchBookRequest) => {
      try {
        const response = await api.get(library.searchBook, { params: searchBookRequest });
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  return { getBook, searchBook };
};

export default useLibraryService;
