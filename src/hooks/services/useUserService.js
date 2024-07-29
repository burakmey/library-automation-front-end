import { useCallback } from "react";
import { user } from "../../constants/ApiEndpoints";
import useApiPrivate from "../hooks/useApiPrivate";

const useAdminService = () => {
  const api = useApiPrivate();

  const borrowBook = useCallback(
    async (bookRequest) => {
      try {
        const response = await api.post(user.borrow, bookRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const borrowReservedBook = useCallback(
    async (bookRequest) => {
      try {
        const response = await api.post(user.borrowReserve, bookRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const returnBook = useCallback(
    async (bookRequest) => {
      try {
        const response = await api.post(user.return, bookRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const reserveBook = useCallback(
    async (bookRequest) => {
      try {
        const response = await api.post(user.reserve, bookRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const cancelDesire = useCallback(
    async (desireRequest) => {
      try {
        const response = await api.delete(user.cancel, { data: desireRequest });
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  return {
    borrowBook,
    borrowReservedBook,
    returnBook,
    reserveBook,
    cancelDesire,
  };
};

export default useAdminService;
