import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import styles from "./Header.module.css";
import { MdLogout } from "react-icons/md";
import { IconContext } from "react-icons";
import Navbar from "../Navigation/Navbar";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBarHandler = () => setSidebar(true);
  const hideSideBarHandler = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "var(--bs-primary)" }}>
        <div className={styles.header}>
          <MdLogout className={styles["logout-handler"]} />

          <div className={styles["pocket-status"]}>
            <label className={styles.button}>
              <GrMoney className={styles.icon} /> Coins
              <span className={styles.badge}>102.00</span>
            </label>
            <label className={`${styles.button} ${styles["btn-money"]}`}>
              <RiMoneyDollarCircleLine className={styles.icon} />
              Money
              <span className={styles.badge}>20$</span>
            </label>
          </div>

          <FaBars
            className={styles["burger-handler"]}
            onClick={showSideBarHandler}
          />
        </div>
        <Navbar onHide={hideSideBarHandler} onActive={sidebar} />
      </IconContext.Provider>
    </>
  );
}

export default Header;
