import React from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Conteudo from "../../componentes/Conteudo";
import Rodape from "../../componentes/Rodape";

const Principal = () => {
  return (
    <>
      <Cabecalho
        logo="logo192.png"
        titulo="Fav.io"
        subtitulo="O melhor gerenciador de favoritos"
      />
      <Conteudo />
      <Rodape
        facebook="icone-facebook.png"
        instagram="icone-instagram.png"
        twitter="icone-twitter.png"
        data=""
      />
    </>
  );
};

export default Principal;
