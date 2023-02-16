import { useEffect } from "react";

import styles from "./UserLists.module.css";
import Card from "../../../UI/Card";
import UserDetail from "./UserDetail";
import Input from "../../../UI/Input";
import { BsSearch } from "react-icons/bs";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getAllUsers } from "../../../lib/api";
import useHttp from "../../../hooks/use-http";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { UserSkeloton } from "./UserSkeloton";

const UserLists = (props) => {
  const {
    sendRequest,
    status,
    data: loadedUsers,
    error,
  } = useHttp(getAllUsers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let users = <UserSkeloton cards={16} />;
  if (status === "pending") {
    users = <UserSkeloton cards={16} />;
  }

  if (error) {
    users = <Card className="centered focused">{error}</Card>;
  }

  if (status === "completed" && (!loadedUsers || loadedUsers.length === 0)) {
    users = <Card className="centered">no user found</Card>;
  }




  if (status === "completed" && (loadedUsers || loadedUsers.length !== 0)) {



    users = loadedUsers.map((user) => {

      // fetch('http://localhost:5000/coin', {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify({ coins: user.coins, id: user.id })
      // })

      return (
        <UserDetail
          image={user.imageURL}
          key={user.id}
          id={user.id}
          coins={user.coins.toFixed(2)}
          name={user.name}
          dealing={props.to}
        />
      )
    });
  }

  const classes = props.to === "sell" ? styles.sell : styles.buy;

  return (
    <Card className={styles["card-handler"]}>
      <h2 className={classes}>{props.to || <Skeleton />}</h2>
      <form className={styles.setting}>
        <Input
          disable={status !== "completed" && true}
          label="Search Users..."
          type="text"
          logo={BsSearch}
        />
        <Select defaultValue="">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Medium - High Coins</MenuItem>
          <MenuItem value={20}>Low - Medium Coin</MenuItem>
          <MenuItem value={30}>Low Coins</MenuItem>
        </Select>
      </form>
      <div className={styles.users}>{users}</div>
    </Card>
  );
};

export default UserLists;
