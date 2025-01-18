import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client`
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure "root" matches your index.html

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

