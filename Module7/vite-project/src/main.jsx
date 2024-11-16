import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes.jsx";
import { UserProvider } from '../context/UserContext'
import MyThemeProvider from '../context/MyThemeProvider'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <MyThemeProvider>
        <BrowserRouter>
          <App />
          <AppRoutes />
        </BrowserRouter>
      </MyThemeProvider>
    </UserProvider>
  </StrictMode>
);
