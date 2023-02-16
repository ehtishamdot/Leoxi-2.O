import React, { useEffect } from "react";
import Modal from "../../UI/Modal";
import styles from "./Cart.module.css";
import Card from "../../UI/Card";
import CartItem from "./CartItem";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleUser } from "../../lib/api";
import UserDetail from "../../pages/components/Users/UserDetail";
import { UserSkeloton } from "../../pages/components/Users/UserSkeloton";
import CartItemSkeleton from "./CartItemSkeleton";

const CartDetails = (props) => {
  console.log("in cart Details");
  const { cartId } = useParams();
  const { loading } = props;
  let history, cartUser, loadingStatus;

  const tradeHistory = [
    {
      id: "1",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "rejected",
    },
    {
      id: "2",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "rejected",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
    {
      id: "3",
      coins: 10,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GjmaDEqf32uo9YNgcCr8kcYYQhfS8ITib4JNfI0=s96-c",
      name: "Karachi foodies",
      state: "accepted",
    },
    {
      id: "4",
      coins: 1.0000101000000001,
      date: "Wednesday, 6 April 2022",
      image:
        "https://lh3.googleusercontent.com/a/AATXAJy_USv6_EiwJ2U3kfJxmTBkNs5lgb6UIyAgRXFU=s96-c",
      name: "Martynas Leonavicius",
      state: "ongoing",
    },
  ];

  const {
    sendRequest,
    status,
    data: loadedUser,
    error,
  } = useHttp(getSingleUser, true);

  useEffect(() => {
    sendRequest(cartId);
  }, [cartId, sendRequest]);

  if (status === "pending") {
    loadingStatus = true;
  }

  if (error) {
    loadingStatus = false;
  }

  if (status === "completed" && (!loadedUser || loadedUser.length === 0)) {
    // setLoadingState(true);
    cartUser = <Modal className="centered">no user found</Modal>;
  }

  if (status === "completed" && (loadedUser || loadedUser.length !== 0)) {
    loadingStatus = false;
    loading();
    cartUser = (
      <UserDetail
        image={loadedUser.imageURL}
        coins={loadedUser.coins.toFixed(2)}
      />
    );
  }

  history = tradeHistory.map((item, i) => {
    return (
      <CartItem
        coins={item.coins}
        date={item.date}
        image={item.image}
        name={item.name}
        state={item.state}
        key={i}
      />
    );
  });

  return (
    <div>
      {loadingStatus ? <UserSkeloton cards={1} /> : cartUser}
      <Card>
        <ul className={styles["cart-items"]}>
          {loadingStatus ? <CartItemSkeleton cards={10} /> : history}
        </ul>
      </Card>
      {error && <div>{error}</div>}
    </div>
  );
};

export default React.memo(CartDetails);
