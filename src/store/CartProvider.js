import React, { useState } from "react";

export const CartContext = React.createContext({
  userInfoHandler: (info) => {},
  user: {},
  dealingStatusHandler: (status) => {},
  dealingStatus: null,
});

const CartProvider = (props) => {
  const [user, setUserInfo] = useState({});
  const [dealingStatus, setDealingStatus] = useState(null);

  const userInfoHandler = (info) => setUserInfo(info);

  const dealingStatusHandler = (status) => setDealingStatus(status);

  const cartContext = {
    currentUser: userInfoHandler,
    user,
    dealingStatusHandler,
    dealingStatus,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
