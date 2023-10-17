import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouterProvider from "./providers/route";
import { AuthProvider } from "./providers/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouterProvider />
    </AuthProvider>
  </React.StrictMode>
);
