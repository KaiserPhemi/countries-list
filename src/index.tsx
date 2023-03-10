// react libraries
import React from "react";
import ReactDOM from "react-dom/client";

// context
import { ThemeProvider } from "./context/ThemeContext";

// styles
import "./index.css";

// component(s)
import App from "./App";

// tools
import reportWebVitals from "./reportWebVitals";
import { register } from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register();
