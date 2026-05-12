import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CardProvider from "./context/CardProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CardProvider>
      <App />
    </CardProvider>
  </BrowserRouter>,
);
