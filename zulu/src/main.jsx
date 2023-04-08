import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserAuthProvider } from "./Features/Context/AuthUser";
import { DbConfigProvider } from "./Features/Context/DbConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <DbConfigProvider>
          <App />
        </DbConfigProvider>
      </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
