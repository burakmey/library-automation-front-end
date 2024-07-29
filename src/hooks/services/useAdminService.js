import { useCallback } from "react";
import { admin } from "../../constants/ApiEndpoints";
import useApiPrivate from "../hooks/useApiPrivate";

const useAdminService = () => {
  const api = useApiPrivate();

  const getAllDesires = useCallback(async () => {
    try {
      const response = await api.get(admin.desires);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [api]);

  const getBorrowedBooks = useCallback(async () => {
    try {
      const response = await api.get(admin.borrowedBooks);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [api]);

  const getReservedBooks = useCallback(async () => {
    try {
      const response = await api.get(admin.reservedBooks);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [api]);

  const acceptBorrow = useCallback(
    async (desireRequest) => {
      try {
        const response = await api.post(admin.acceptBorrow, desireRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const acceptReserveBorrow = useCallback(
    async (desireRequest) => {
      try {
        const response = await api.post(admin.acceptReserveBorrow, desireRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const acceptReturn = useCallback(
    async (desireRequest) => {
      try {
        const response = await api.post(admin.acceptReturn, desireRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const rejectDesire = useCallback(
    async (desireRequest) => {
      try {
        const response = await api.delete(admin.reject, desireRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const addBook = useCallback(
    async (addBookRequest) => {
      try {
        const response = await api.post(admin.addBook, addBookRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const addPublisher = useCallback(
    async (AddPublisherRequest) => {
      try {
        const response = await api.post(admin.borrowedBooks, AddPublisherRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const addAuthor = useCallback(
    async (addAuthorRequest) => {
      try {
        const response = await api.post(admin.addAuthor, addAuthorRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const addCategory = useCallback(
    async (addCategoryRequest) => {
      try {
        const response = await api.post(admin.addCategory, addCategoryRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  return {
    getAllDesires,
    getBorrowedBooks,
    getReservedBooks,
    acceptBorrow,
    acceptReserveBorrow,
    acceptReturn,
    rejectDesire,
    addBook,
    addPublisher,
    addAuthor,
    addCategory,
  };
};

export default useAdminService;
