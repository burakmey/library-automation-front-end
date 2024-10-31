import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutNavBar from "./components/Layout/LayoutNavBar";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import RequireNotAuth from "./components/RequireNotAuth";
import { publicRoutes, protecteRoutesdUser, protectedRoutesAdmin } from "./constants/RouteEndpoints";
import { AcceptDesires, AddBook, AdminPanel, BorrowedList, ReservedList, UpdateBook } from "./pages/AdminPages";
import { Home, Login, Register, ReviewBook, SearchBook } from "./pages/AnonymousPages";
import { BorrowedBooks, Fines, Profile, ReservedBooks, WaitingDesires } from "./pages/UserPages";
import TestHub from "./pages/Anonymous/TestHub";

function App() {
  useEffect(() => {
    console.log("App mounted!");
    return () => console.log("App unmounted!");
  }, []);

  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<LayoutNavBar />}>
          <Route path={publicRoutes.base} element={<Home />} />
          <Route>
            <Route path={publicRoutes.search} element={<SearchBook />} />
            <Route path={publicRoutes.reviewBook} element={<ReviewBook />} />
            <Route path={publicRoutes.testHub} element={<TestHub />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["User", "Admin"]} />}>
            <Route path={protecteRoutesdUser.profile} element={<Profile />} />
            <Route path={protecteRoutesdUser.borrowed} element={<BorrowedBooks />} />
            <Route path={protecteRoutesdUser.fines} element={<Fines />} />
            <Route path={protecteRoutesdUser.desires} element={<WaitingDesires />} />
            <Route path={protecteRoutesdUser.reserved} element={<ReservedBooks />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route path={protectedRoutesAdmin.admin} element={<AdminPanel />} />
            <Route path={protectedRoutesAdmin.addBook} element={<AddBook />} />
            <Route path={protectedRoutesAdmin.updateBook} element={<UpdateBook />} />
            <Route path={protectedRoutesAdmin.desires} element={<AcceptDesires />} />
            <Route path={protectedRoutesAdmin.borrowed} element={<BorrowedList />} />
            <Route path={protectedRoutesAdmin.reserved} element={<ReservedList />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              404 Not Found back to home button <Link to="/">Home</Link>
            </div>
          }
        />
        <Route element={<Layout />}>
          <Route element={<RequireNotAuth />}>
            <Route path={publicRoutes.login} element={<Login />} />
            <Route path={publicRoutes.register} element={<Register />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
