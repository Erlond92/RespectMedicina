import styles from "./ButtonPrimary.module.scss";
import React from "react";

import classNames from "classnames";

type ButtonPrimaryProps = {
  text?: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  typeButton?: 'gray' | 'accent'
};

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, type, typeButton, className }) => {
  return (
    <button type={type} className={classNames(styles[typeButton || 'accent'], styles.Button, className)}>
      <p>{text}</p>
    </button>
  );
};
