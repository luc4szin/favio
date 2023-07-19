import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape(props) {
  return (
    <div className={styles.rodape}>
      <img className={styles.facebook} src={props.facebook}></img>
    </div>
  );
}
