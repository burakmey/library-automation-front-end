import { axiosPrivate } from "../api/axios";
import { user } from "../constants/ApiEndpoints";

const borrowBook = async (bookRequest) => {
  try {
    const response = await axiosPrivate.post(user.borrow, bookRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to borrow book!");
  }
};

const borrowReservedBook = async (bookRequest) => {
  try {
    const response = await axiosPrivate.post(user.borrowReserve, bookRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to borrow reserved book!");
  }
};

const returnBook = async (bookRequest) => {
  try {
    const response = await axiosPrivate.post(user.return, bookRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to return book!");
  }
};

const reserveBook = async (bookRequest) => {
  try {
    const response = await axiosPrivate.post(user.reserve, bookRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to reserve book!");
  }
};

const cancelDesire = async (desireRequest) => {
  try {
    const response = await axiosPrivate.delete(user.cancel, { data: desireRequest });
    return response.data;
  } catch (error) {
    throw new Error("Failed to cancel desire!");
  }
};

export { borrowBook, borrowReservedBook, returnBook, reserveBook, cancelDesire };
