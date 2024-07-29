import { useEffect } from "react";
import { api } from "../api/axios";

const useApi = () => {
  useEffect(() => {
    console.log("api mounted!");

    const requestIntercept = api.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error)
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      (error) => {
        let errorMessage;
        if (error.response?.data) {
          // {type, title, status, errors: {}, traceId}
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
              errorMessage = error.response.data.message || "An unknown error occurred";
          }
          //console.error("Server Error:", error.response.data);
        } else if (error.request) {
          //console.error("Network Error:", error.message);
          errorMessage = "Network error. Please check your internet connection.";
        } else {
          //console.error("Error:", error.message);
          errorMessage = error.message;
        }
        return Promise.reject(errorMessage);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
      console.log("api unmounted!");
    };
  }, []);

  return api;
};

export default useApi;
