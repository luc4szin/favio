import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo, { OlaMundo } from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";

function App() {
  OlaMundo();
  return (
    <>
      <Cabecalho
        logo="logo192.png"
        titulo="Fav.io"
        subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"
      />
      ;
      <Conteudo />;
      <Rodape
        facebook="icone-facebook.png"
        instagram="icone-instagram.png"
        twitter="icone-twitter.png"
        data=""
      />
      ;
    </>
  );
}

export default App;
