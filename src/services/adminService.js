import { axiosPrivate } from "../api/axios";
import { admin } from "../constants/ApiEndpoints";

const getAllDesires = async () => {
  try {
    const response = await axiosPrivate.get(admin.desires);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch desires!");
  }
};

const getBorrowedBooks = async () => {
  try {
    const response = await axiosPrivate.get(admin.borrowedBooks);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch borrowed books!");
  }
};

const getReservedBooks = async () => {
  try {
    const response = await axiosPrivate.get(admin.reservedBooks);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch reserved books!");
  }
};

const acceptBorrow = async (desireRequest) => {
  try {
    const response = await axiosPrivate.post(admin.acceptBorrow, desireRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to accept borrow!");
  }
};

const acceptReserveBorrow = async (desireRequest) => {
  try {
    const response = await axiosPrivate.post(admin.acceptReserveBorrow, desireRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to accept reserve borrow!");
  }
};

const acceptReturn = async (desireRequest) => {
  try {
    const response = await axiosPrivate.post(admin.acceptReturn, desireRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to accept return!");
  }
};

const rejectDesire = async (desireRequest) => {
  try {
    const response = await axiosPrivate.delete(admin.reject, { data: desireRequest });
    return response.data;
  } catch (error) {
    throw new Error("Failed to reject desire!");
  }
};

const addBook = async (addBookRequest) => {
  try {
    const response = await axiosPrivate.post(admin.addBook, addBookRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add book!");
  }
};

const addPublisher = async (AddPublisherRequest) => {
  try {
    const response = await axiosPrivate.post(admin.addPublisher, AddPublisherRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add publishers!");
  }
};

const addAuthor = async (addAuthorRequest) => {
  try {
    const response = await axiosPrivate.post(admin.addAuthor, addAuthorRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add authors!");
  }
};

const addCategory = async (addCategoryRequest) => {
  try {
    const response = await axiosPrivate.post(admin.addCategory, addCategoryRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add categories!");
  }
};

export {
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
