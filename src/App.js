import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo, { OlaMundo } from "./componentes/Conteudo";

function App() {
  OlaMundo();
  return (
  <>
  <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>;
  <Conteudo/>;
  <Rodape rodape="a"/>; 
  </>
  )
}

export default App;
