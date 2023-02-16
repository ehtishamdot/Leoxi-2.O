import React from "react";
import UsersCard from "./components/Users/UserListsCard";

const Trade = (props) => {
  return <UsersCard showCart={props.onShow} />;
};

export default Trade;
