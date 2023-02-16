import React from "react";

import * as AiIcons from "react-icons/ai";

import styles from "./Navbar.module.css";
import LogoIcon from "../../UI/LogoIcon";
import NavbarItems from "./NavbarItems";

import { HiOutlineLogout } from "react-icons/hi";

const Navbar = (props) => {
  const navClasses = props.onActive
    ? `${styles["nav-menu"]} ${styles.active}`
    : `${styles["nav-menu"]}`;

  return (
    <nav className={navClasses}>
      <ul className={styles["nav-menu-items"]}>
        <div className={styles["nav-top"]}>
          <div className={styles["nav-top__profile"]}>
            <img
              src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
              alt="profile"
            ></img>
            <div className={styles["nav-top__text"]}>
              <span>Hello, Ehtisham</span>
              <button className={styles["logout-btn"]}>
                <HiOutlineLogout />
                <span> SignOut</span>
              </button>
            </div>
          </div>
          <AiIcons.AiOutlineClose
            className={styles["menu-bars"]}
            onClick={props.onHide}
          />
        </div>

        <li className={styles["nav-logo"]}>
          <div>
            <LogoIcon className={styles["nav-logo__img"]} />
            <span className={styles["nav-logo__text"]}>Leoxi</span>
          </div>
        </li>

        <NavbarItems onConfirm={props.onHide} />
      </ul>
    </nav>
  );
};

export default Navbar;
