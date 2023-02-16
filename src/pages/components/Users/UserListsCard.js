import React from "react";

import styles from "./UsersCard.module.css";
import UserLists from "./UserLists";
import { Outlet } from "react-router-dom";

function UserListsCard(props) {
  return (
    <div className={styles.card}>
      <Outlet />
      <UserLists onShowCart={props.showCart} onBuy="#" to="buy" />
      <UserLists onShowCart={props.showCart} onSell="#" to="sell" />
    </div>
  );
}

export default UserListsCard;
