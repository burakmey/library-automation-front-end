import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";

function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default Layout;
