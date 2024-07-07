import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import RequireNotAuth from "./components/RequireNotAuth";
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
      <Route path="/" element={<Layout />}>
        <Route element={<PersistLogin />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route element={<RequireNotAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/search" element={<Layout />}>
            <Route path="/search" element={<SearchBook />} />
            <Route path="/search/book" element={<ReviewBook />} />
          </Route>
          {/* Protected Routes "User", "Admin" */}
          <Route path="/profile" element={<RequireAuth allowedRoles={["User", "Admin"]} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/borrowed" element={<BorrowedBooks />} />
            <Route path="/profile/fines" element={<Fines />} />
            <Route path="/profile/waiting" element={<WaitingDesires />} />
            <Route path="/profile/reserved" element={<ReservedBooks />} />
          </Route>
          {/* Protected Routes "Admin" */}
          <Route path="/admin" element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/add" element={<AddBook />} />
            <Route path="/admin/update" element={<UpdateBook />} />
            <Route path="/admin/desires" element={<AcceptDesires />} />
            <Route path="/admin/borrowedList" element={<BorrowedList />} />
            <Route path="/admin/reservedList" element={<ReservedList />} />
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
