import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import RequireNotAuth from "./components/RequireNotAuth";
import { publicRoutes, protecteRoutesdUser, protectedRoutesAdmin } from "./constants/RouteEndpoints";
import {
  AdminPanel,
  SearchBook,
  Home,
  Login,
  Register,
  AddBook,
  ReviewBook,
  UpdateBook,
  Profile,
  BorrowedBooks,
  Fines,
  WaitingDesires,
  ReservedBooks,
  AcceptDesires,
  BorrowedList,
  ReservedList,
} from "./pages/Pages";

function App() {
  useEffect(() => {
    console.log("App mounted!");
    return () => console.log("App unmounted!");
  }, []);

  return (
    <Routes>
      <Route path={publicRoutes.base} element={<Layout />}>
        <Route element={<PersistLogin />}>
          {/* Public Routes */}
          <Route path={publicRoutes.base} element={<Home />} />
          <Route element={<RequireNotAuth />}>
            <Route path={publicRoutes.login} element={<Login />} />
            <Route path={publicRoutes.register} element={<Register />} />
          </Route>
          <Route path={publicRoutes.search} element={<Layout />}>
            <Route path={publicRoutes.search} element={<SearchBook />} />
            <Route path={publicRoutes.reviewBook} element={<ReviewBook />} />
          </Route>
          {/* Protected Routes "User", "Admin" */}
          <Route path={protecteRoutesdUser.profile} element={<RequireAuth allowedRoles={["User", "Admin"]} />}>
            <Route path={protecteRoutesdUser.profile} element={<Profile />} />
            <Route path={protecteRoutesdUser.borrowed} element={<BorrowedBooks />} />
            <Route path={protecteRoutesdUser.fines} element={<Fines />} />
            <Route path={protecteRoutesdUser.desires} element={<WaitingDesires />} />
            <Route path={protecteRoutesdUser.reserved} element={<ReservedBooks />} />
          </Route>
          {/* Protected Routes "Admin" */}
          <Route path={protectedRoutesAdmin.admin} element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route path={protectedRoutesAdmin.admin} element={<AdminPanel />} />
            <Route path={protectedRoutesAdmin.addBook} element={<AddBook />} />
            <Route path={protectedRoutesAdmin.updateBook} element={<UpdateBook />} />
            <Route path={protectedRoutesAdmin.desires} element={<AcceptDesires />} />
            <Route path={protectedRoutesAdmin.borrowed} element={<BorrowedList />} />
            <Route path={protectedRoutesAdmin.reserved} element={<ReservedList />} />
          </Route>
        </Route>
        {/* Catch All */}
        <Route
          path="*"
          element={
            <div>
              404 Not Found back to home button <Link to="/">Home</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
