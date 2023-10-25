import React from "react";
import Principal from "./pages/Principal";
import CadastroUsuario from "./pages/CadastroUsuario";
import LoginUsuario from "./pages/LoginUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Cabecalho
        logo="logo192.png"
        titulo="Fav.io"
        subtitulo="O melhor gerenciador de favoritos"
      />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
      <Rodape
        facebook="icone-facebook.png"
        instagram="icone-instagram.png"
        twitter="icone-twitter.png"
        data=""
      />
    </BrowserRouter>
  );
};

export default Rotas;
