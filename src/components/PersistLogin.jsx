import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, authRefresh } = useAuthContext();

  useEffect(() => {
    console.log("PersistLogin mounted!");
    const verifyRefreshToken = async () => {
      try {
        await authRefresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !user ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      console.log("PersistLogin unmounted!");
    };
  }, [user, authRefresh]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}

export default PersistLogin;
