import React from "react";
import Principal from "./pages/Principal";
import CadastroUsuario from "./pages/CadastroUsuario";
import LoginUsuario from "./pages/LoginUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
