import React from "react";
import styles from "./Cabecalho.module.css";
import Menu from "../Menu";

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      <img className={styles.logo} src={props.logo} alt="img-logo" />
      <p className={styles.titulo}>{props.titulo}</p>
      <p className={`${styles.titulo} ${styles.subtitulo}`}>
        {props.subtitulo}
      </p>
      <Menu />
    </div>
  );
}
