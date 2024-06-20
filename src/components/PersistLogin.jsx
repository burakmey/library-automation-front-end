import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useRefreshToken from "../hooks/useRefreshToken";

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { userData } = useAuthContext();

  useEffect(() => {
    console.log("PersistLogin mounted!");
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        //console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    !userData ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      console.log("PersistLogin unmounted!");
    };
  }, [refresh, userData]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}

export default PersistLogin;
