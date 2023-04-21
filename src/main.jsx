import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./assets/Style/theme";
import App from "./App";
// import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
