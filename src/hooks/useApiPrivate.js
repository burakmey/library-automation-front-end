import { useEffect } from "react";
import { apiPrivate } from "../api/axios";
import { useAuthContext } from "./Hooks";

const useApiPrivate = () => {
  const { user, authRefresh } = useAuthContext();

  useEffect(() => {
    console.log("apiPrivate mounted!");

    const requestIntercept = apiPrivate.interceptors.request.use(
      (request) => {
        if (request.headers["Authorization"] !== `Bearer ${user.accessToken}`) {
          request.headers["Authorization"] = `Bearer ${user.accessToken}`;
        }
        return request;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { response } = error;
        if (response && response.status === 401) {
          const previousRequest = error?.config;
          await authRefresh().then(() => {
            previousRequest.headers["Authorization"] = `Bearer ${user.accessToken}`;
            return apiPrivate(previousRequest);
          });
        }
        let errorMessage = "An unknown error occurred";
        if (error.response.data) {
          errorMessage = error.response.data;
        } else if (error.response) {
          switch (error.response.status) {
            case 400:
              errorMessage = "Bad request";
              break;
            case 401:
              errorMessage = "Unauthorized";
              break;
            case 403:
              errorMessage = "Forbidden";
              break;
            case 404:
              errorMessage = "Not found";
              break;
            case 500:
              errorMessage = "Internal server error";
              break;
            default:
              errorMessage = error.response.data.message || errorMessage;
          }
          //console.error("Server Error:", error.response.data);
        } else if (error.request) {
          //console.error("Network Error:", error.message);
          errorMessage = "Network error. Please check your internet connection.";
        } else {
          // console.error("Error:", error.message);
          errorMessage = error.message;
        }
        return Promise.reject(new Error(errorMessage));
      }
    );
    return () => {
      apiPrivate.interceptors.request.eject(requestIntercept);
      apiPrivate.interceptors.response.eject(responseIntercept);
      console.log("apiPrivate unmounted!");
    };
  }, [user, authRefresh]);

  return apiPrivate;
};

export default useApiPrivate;
