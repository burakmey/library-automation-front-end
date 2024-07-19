import axios from "../api/axios";
import { library } from "../constants/ApiEndpoints";

const getBook = async (getBookRequest) => {
  try {
    const response = await axios.get(library.getBook, { params: getBookRequest });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get book!");
  }
};

const searchBook = async (searchBookRequest) => {
  try {
    const response = await axios.get(library.searchBook, { params: searchBookRequest });
    return response.data;
  } catch (error) {
    throw new Error("Failed to search book!");
  }
};

export { getBook, searchBook };
