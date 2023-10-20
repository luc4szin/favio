import React, { useState } from "react";

const LoginUsuario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSenha(e) {
    setSenha(e.target.value);
  }
  function handleSubmit(e) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(usuario);
    if (usuario != null) {
      console.log(usuario.email);
      console.log(usuario.senha);
      if (email == usuario.email && senha == usuario.senha) {
        alert("Usuário Logado");
      } else {
        alert("Erro nas credenciais. Tente Novamente!");
      }
    }
  }

  return (
    <form className="login-form">
      <h2>Login</h2>
      <br />
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
      <input
        type="button"
        value="Login"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      />
    </form>
  );
};

export default LoginUsuario;
