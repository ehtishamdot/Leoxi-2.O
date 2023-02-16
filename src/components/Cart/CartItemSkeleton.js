import styles from "./CartItem.module.css";
import Skeleton from "react-loading-skeleton";

const CartItemSkeleton = (props) => {
  return Array(props.cards)
    .fill(0)
    .map((_, i) => (
      <li className={styles["cart-item"]} key={i}>
        <div>
          <h2>{<Skeleton count={1} width={250} />}</h2>
          <div className={styles.summary}>
            <Skeleton height={20} width={100} />
            <span className={styles.coins}>{<Skeleton />}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <span className={styles[props.state]}>
            {<Skeleton height={20} width={100} />}
          </span>
        </div>
      </li>
    ));
};

export default CartItemSkeleton;
