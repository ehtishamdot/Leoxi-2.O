import React, { useImperativeHandle, useRef } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const Logo = props.logo;

  const inputRef = useRef(null);

  const activate = () => {
    inputRef.current.focus();
  };

  const value = () => {
    inputRef.current.value();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
      value: value,
    };
  });

  // const classes = `${classes.control} ${
  //   props.isValid === false ? classes.invalid : ""
  // }`;

  return (
    <div className={`${styles.box} ${props.className}`}>
      <input
        type={props.type}
        className={styles.input}
        placeholder={props.label}
        disabled={props.disable}
        min={props.mim}
        max={props.max}
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <button disabled={props.disable} className={styles.button}>
        <Logo color="var(--bs-primary)" />
      </button>
    </div>
  );
});

export default React.memo(Input);
