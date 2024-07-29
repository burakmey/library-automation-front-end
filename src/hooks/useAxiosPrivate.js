// import { axiosPrivate } from "../api/axios";
// import { useEffect } from "react";
// import useAuthContext from "./useAuthContext";

// const useAxiosPrivate = () => {
//   console.log("useAxiosPrivate mounted!");
//   const { user, authRefresh } = useAuthContext();

//   useEffect(() => {
//     const requestIntercept = axiosPrivate.interceptors.request.use(
//       (request) => {
//         if (request.headers["Authorization"] !== user.accessToken) {
//           request.headers["Authorization"] = `Bearer ${user.accessToken}`;
//         }
//         console.log(request);
//         return request;
//       },
//       (error) => {
//         console.log(error);
//         return Promise.reject(error);
//       }
//     );
//     const responseIntercept = axiosPrivate.interceptors.response.use(
//       (response) => {
//         console.log(response);
//         return response;
//       },
//       async (error) => {
//         console.log(error);
//         const { response } = error;
//         if (response && response.status === 401) {
//           const previousRequest = error?.config;
//           await authRefresh()
//             .then(() => {
//               previousRequest.headers["Authorization"] = `Bearer ${user.accessToken}`;
//               return axiosPrivate(previousRequest);
//             })
//             .catch((error) => Promise.reject(error));
//         }
//         return Promise.reject(error);
//       }
//     );
//     return () => {
//       axiosPrivate.interceptors.request.eject(requestIntercept);
//       axiosPrivate.interceptors.response.eject(responseIntercept);
//       console.log("useAxiosPrivate unmounted!");
//     };
//   }, [user, authRefresh]);
//   return axiosPrivate;
// };

// export default useAxiosPrivate;
