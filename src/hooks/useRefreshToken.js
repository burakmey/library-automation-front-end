import useAuthContext from "./useAuthContext";
import axios from "../api/axios";

const useRefreshToken = () => {
  const refreshURL = process.env.REACT_APP_AUTH_REFRESH_URL;
  const { updateUserData } = useAuthContext();

  const refresh = async () => {
    try {
      const refreshResponse = await axios.post(refreshURL, {}, { withCredentials: true });
      updateUserData(refreshResponse.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return refresh;
};

export default useRefreshToken;
