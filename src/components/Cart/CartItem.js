import styles from "./CartItem.module.css";
import { GrMoney } from "react-icons/gr";
import Skeleton from "react-loading-skeleton";

const CartItem = (props) => {
  const coins = `${props.coins.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.date || <Skeleton />}</h2>
        <div className={styles.summary}>
          <GrMoney />
          <span className={styles.coins}>{coins || <Skeleton />}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles[props.state]}>
          {props.state || <Skeleton />}
        </button>
      </div>
    </li>
  );
};

export default CartItem;
