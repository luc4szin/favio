import React, { useState } from "react";
import { json } from "react-router-dom";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleNome(e) {
    setNome(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSenha(e) {
    setSenha(e.target.value);
  }
  function handleConfirmarSenha(e) {
    setConfirmarSenha(e.target.value);
  }

  function handleSubmit(e) {
    if (senha == confirmarSenha) {
      const usuario = { nome, email, senha };
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      alert("As senhas não coincidem");
    }
  }

  return (
    <form className="cadastro-form">
      <h2>Cadastro</h2>
      <br />
      <label htmlFor="nome">Nome: </label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={(e) => handleNome(e)}
      />
      <br /> <br />
      <label htmlFor="email">E-Mail: </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => handleEmail(e)}
      />
      <br /> <br />
      <label htmlFor="senha">Senha: </label>
      <input
        type="password"
        id="senha"
        name="senha"
        onChange={(e) => handleSenha(e)}
      />
      <br />
      <br />
      <label htmlFor="confirmarSenha">Confirmar Senha: </label>
      <input
        type="password"
        id="confirmarSenha"
        name="confirmarSenha"
        onChange={(e) => handleConfirmarSenha(e)}
      />
      <br />
      <input
        type="button"
        value="Salvar"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      />
    </form>
  );
};

export default CadastroUsuario;
