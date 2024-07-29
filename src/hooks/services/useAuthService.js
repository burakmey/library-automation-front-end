import { useCallback } from "react";
import { auth } from "../constants/ApiEndpoints";
import useApi from "../hooks/useApi";

const useAuthService = () => {
  const api = useApi();

  const login = useCallback(
    async (loginRequest) => {
      try {
        const response = await api.post(auth.login, loginRequest, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  const refresh = useCallback(async () => {
    try {
      const response = await api.post(auth.refresh, undefined, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }, [api]);

  const register = useCallback(
    async (registerRequest) => {
      try {
        const response = await api.post(auth.register, registerRequest);
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [api]
  );

  return { login, refresh, register };
};

export default useAuthService;
