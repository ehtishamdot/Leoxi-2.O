import React from "react";
import Card from "../../../UI/Card";
import styles from "./UserDetail.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const UserSkeloton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Card className={styles["user-skeleton"]} key={i}>
        <Skeleton circle width={70} height={70} />
        <div className={styles[`right-col`]}>
          <h3>
            <Skeleton width={100} />
          </h3>
          <span>
            <Skeleton />
          </span>
        </div>
      </Card>
    ));
};
