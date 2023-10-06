import React from "react";
import Conteudo from "./componentes/Conteudo";
import CadastroUsuario from "./pages/CadastroUsuario";
import LoginUsuario from "./pages/LoginUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Conteudo />} />
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
