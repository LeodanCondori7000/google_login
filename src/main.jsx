import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="319842514668-ocdodtid6hgjtkea2cgbej610cp8tp44.apps.googleusercontent.com">
      <App />
      <App2 />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
