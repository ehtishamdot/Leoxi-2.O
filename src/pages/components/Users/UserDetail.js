import styles from "./UserDetail.module.css";
import Card from "../../../UI/Card";
import { FaCoins } from "react-icons/fa";
import { GiCoins, GiCoinsPile, GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const UserDetail = (props) => {
  let coinIcon = <GiTwoCoins />;
  if (props.coins <= 10 && props.coins > 5) {
    coinIcon = <FaCoins />;
  } else if (props.coins <= 50 && props.coins > 10) {
    coinIcon = <GiCoins />;
  } else if (props.coins >= 100) {
    coinIcon = <GiCoinsPile />;
  }
  // cartId === undefined && `cart/${props.dealing}/${props.id}`
  return (
    <Link to={`cart/${props.dealing}/${props.id}`}>
      <Card className={styles.user}>
        <img src={props.image} alt="profile" />
        <div>
          <h3>COINS</h3>
          <span>
            {coinIcon} {props.coins || <Skeleton />}
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default UserDetail;
