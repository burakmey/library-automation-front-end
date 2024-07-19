import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { publicRoutes } from "../constants/RouteEndpoints";

function RequireNotAuth() {
  console.log("RequireNotAuth mounted!");

  const { user } = useAuthContext();
  const location = useLocation();

  return !user ? <Outlet /> : <Navigate to={publicRoutes.base} state={{ from: location }} replace />;
}

export default RequireNotAuth;
