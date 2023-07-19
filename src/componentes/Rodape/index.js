import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape(props) {
  return (
    <div>
      <p className={styles.rodape}>{props.rodape}</p>
    </div>
  );
}
