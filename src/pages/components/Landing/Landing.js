import React from "react";

import styles from "./Landing.module.css";

import LogoIcon from "../../../UI/LogoIcon";
import Footer from "../../../components/Footer/Footer";

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <LogoIcon className={styles["logo-icon"]} />
        <span className={styles.price}>0.00008756$</span>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
