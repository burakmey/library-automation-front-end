import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/GlobalStyle";
import App from "./App";
import "./index.css";
import { MainContainer } from "./components/Container/Container.style";
import { MainProvider } from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route
        path="/*"
        element={
          <MainProvider>
            <MainContainer>
              <App />
            </MainContainer>
          </MainProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
