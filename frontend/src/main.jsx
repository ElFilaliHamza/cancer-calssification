// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { muiTheme } from "./materialTheme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
