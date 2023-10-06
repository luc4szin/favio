import React, { useState } from "react";
import { json } from "react-router-dom";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrarUsuario(nome, email, senha) {
    let usuario = { nome, email, senha };
    console.log(usuario);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  function validarSenha(nome, email, senha, confirmarSenha) {
    if (senha == confirmarSenha) {
      cadastrarUsuario(nome, email, senha);
    } else {
      alert("As senhas não coincidem");
    }
  }

  return (
    <form className="cadastro-form">
      <h2>Cadastro</h2>
      <br />
      <label htmlFor="nome">Nome: </label>
      <input type="text" id="nome" name="nome" />
      <br /> <br />
      <label htmlFor="email">E-Mail: </label>
      <input type="email" id="email" name="email" />
      <br /> <br />
      <label htmlFor="senha">Senha: </label>
      <input type="password" id="senha" name="senha" />
      <br />
      <br />
      <label htmlFor="confirmarSenha">Confirmar Senha: </label>
      <input type="password" id="confirmarSenha" name="confirmarSenha" />
      <br />
      <input type="button" value="Salvar" onClick={() => validarSenha()} />
    </form>
  );
};

export default CadastroUsuario;
