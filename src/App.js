import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import "./App.css";

function App() {
  console.log("App mounted!");

  useEffect(() => {
    return () => console.log("App unmounted!");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
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
