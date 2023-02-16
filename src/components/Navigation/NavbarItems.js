import React from "react";

import { NavLink } from "react-router-dom";
import styles from "./NavbarItems.module.css";
import { SidebarData } from "../../data/SidebarData";

const NavbarItems = (props) => {
  return (
    <React.Fragment>
      {SidebarData.map((item, index) => {
        return (
          <li
            key={index}
            className={styles["nav-text"]}
            onClick={props.onConfirm}
          >
            <NavLink to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default NavbarItems;
