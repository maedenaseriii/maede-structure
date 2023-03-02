import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppReduxProvider from "./providers/AppReduxProvider";
import AppRouterProvider from "./providers/AppRouterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppReduxProvider>
      <AppRouterProvider />
    </AppReduxProvider>
  </React.StrictMode>
);
