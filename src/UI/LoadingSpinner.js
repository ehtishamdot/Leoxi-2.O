import React from "react";
import LogoIcon from "./LogoIcon";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loader}>
      <LogoIcon className={styles[`loading-spinner`]} />
    </div>
  );
};
