import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/GlobalStyle";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { AdminProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route
        path="/*"
        element={
          <AuthProvider>
            <AdminProvider>
              <App />
            </AdminProvider>
          </AuthProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
