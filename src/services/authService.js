import axios from "../api/axios";
import { auth } from "../constants/ApiEndpoints";

const login = async (loginRequest) => {
  try {
    const response = await axios.post(auth.login, loginRequest, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to login!");
  }
};

const refresh = async () => {
  try {
    const response = await axios.post(auth.refresh, undefined, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const register = async (registerRequest) => {
  try {
    const response = await axios.post(auth.register, registerRequest);
    return response.data;
  } catch (error) {
    throw new Error("Failed to register!");
  }
};

export { login, register, refresh };
