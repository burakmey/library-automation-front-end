import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function RequireAuth({ allowedRoles }) {
  console.log("RequireAuth mounted!");

  const { userData } = useAuthContext();
  const location = useLocation();

  return allowedRoles.includes(userData?.role) ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default RequireAuth;
