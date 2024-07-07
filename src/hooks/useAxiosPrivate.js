import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuthContext from "./useAuthContext";

const useAxiosPrivate = () => {
  console.log("useAxiosPrivate mounted!");
  const refresh = useRefreshToken();
  const { userData } = useAuthContext();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (request) => {
        if (request.headers["Authorization"] !== userData.accessToken) {
          request.headers["Authorization"] = `Bearer ${userData.accessToken}`;
        }
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { response } = error;
        if (response && response.status === 401) {
          const previousRequest = error?.config;
          await refresh()
            .then(() => {
              previousRequest.headers["Authorization"] = `Bearer ${userData.accessToken}`;
              return axiosPrivate(previousRequest);
            })
            .catch((error) => Promise.reject(error));
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
      console.log("useAxiosPrivate unmounted!");
    };
  }, [userData, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
