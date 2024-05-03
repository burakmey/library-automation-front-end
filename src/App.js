import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AdminPanel, SearchBook, Home, Login, Register, AddBook } from "./pages/Pages";

function App() {
  console.log("App mounted!");

  useEffect(() => {
    return () => console.log("App unmounted!");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/add" element={<AddBook />} />
        </Route>
        {/* Protected Routes */}

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
