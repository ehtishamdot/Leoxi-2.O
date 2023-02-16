import React from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const Modaloverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.children}>{props.children}</div>
      </div>
    );
  };

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onHide} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default React.memo(Modal);
