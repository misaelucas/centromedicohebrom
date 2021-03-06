import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Especialidades from "./pages/Especialidades";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
