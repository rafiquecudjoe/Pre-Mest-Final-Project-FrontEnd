import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Windmill } from "@windmill/react-ui";
import myTheme from "./myTheme";
import { Suspense } from "react";
import AppSuspense from "./AppSuspense";
import React from "react";
import { SidebarProvider } from "./store/SidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Suspense fallback={<AppSuspense />}>
          <Windmill theme={myTheme}>
            <App />
          </Windmill>
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
