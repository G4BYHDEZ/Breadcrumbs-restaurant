import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./components/Autenticacion";
import App from "./App";
import "./index.css";

import { CartProvider } from "./components/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);