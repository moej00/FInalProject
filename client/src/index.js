import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AdminContextProvider } from "./context/adminContext/AdminContext";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { OrgContextProvider } from "./context/orgContext/OrgContext";
import { UserContextProvider } from "./context/userContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminContextProvider>
        <OrgContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </OrgContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
