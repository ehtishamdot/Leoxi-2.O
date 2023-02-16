import React from "react";
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <button disabled={props.disable} className={styles.button}>
      <Logo color="var(--bs-primary)" />
    </button>
  );
};
