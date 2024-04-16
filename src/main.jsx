import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'sonner'
import { queryclient } from "./config/queryclient.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <Toaster richColors position="top-right" />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
