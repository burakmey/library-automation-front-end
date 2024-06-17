import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function RequireNotAuth() {
  console.log("RequireNotAuth mounted!");

  const { userData } = useAuthContext();
  const location = useLocation();

  return !userData ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default RequireNotAuth;
