import React, { useState } from "react";

const LoginUsuario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form className="login-form">
      <h2>Login</h2>
      <br />
      <label for="email">E-Mail: </label>
      <input type="email" id="email" name="email" />
      <br /> <br />
      <label for="senha">Senha: </label>
      <input type="password" id="senha" name="senha" />
      <br />
      <input type="button" value="Login" />
    </form>
  );
};

export default LoginUsuario;
