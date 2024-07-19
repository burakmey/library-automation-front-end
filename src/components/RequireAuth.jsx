import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { publicRoutes } from "../constants/RouteEndpoints";

function RequireAuth({ allowedRoles }) {
  console.log("RequireAuth mounted!");

  const { user } = useAuthContext();
  const location = useLocation();

  return allowedRoles.includes(user?.role) ? <Outlet /> : <Navigate to={publicRoutes.base} state={{ from: location }} replace />;
}

export default RequireAuth;
