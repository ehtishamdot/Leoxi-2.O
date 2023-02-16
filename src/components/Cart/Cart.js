import React, { useState } from "react";
import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import styles from "./Cart.module.css";
import { GiTrade } from "react-icons/gi";
import { useParams, Link } from "react-router-dom";
import CartDetails from "./CartDetails";

const Cart = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [requestInput, setRequestInput] = useState();
  const { dealingStatus } = useParams();

  let classes = `${dealingStatus === "sell" ? styles.sell : styles.buy}`;

  if (loadingStatus) classes = `btn-disabled`;

  const onProcessCompletion = () => {
    setLoadingStatus(false);
  };

  const requestInputChangeHandler = (event) => {
    setRequestInput(event.target.value);
  };

  const requestSubmitHandler = (event) => {
    // fetch('http://localhost:5000/coins/').then(res => res.json()).then(data => console.log(data))
    event.preventDefault();
    if (requestInput === 0 || requestInput < 0) {
    }
    console.log(requestInput);
  };

  return (
    <Modal>
      {<CartDetails loading={onProcessCompletion} />}
      <form onSubmit={requestSubmitHandler}>
        <Input
          className={styles.input}
          onChange={requestInputChangeHandler}
          label="Enter Coins"
          type="number"
          logo={GiTrade}
          min="0"
          max="10000"
          value={requestInput}
          disable={loadingStatus}
        />
        <div className={styles.actions}>
          <Link to={`/trade`}>
            <button> Close</button>
          </Link>
          <button disabled={loadingStatus} className={classes}>
            {dealingStatus}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
