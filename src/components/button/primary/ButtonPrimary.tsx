import styles from "./ButtonPrimary.module.scss";
import React from "react";

type ButtonPrimaryProps = {
  text?: string;
  type?: "button" | "reset" | "submit";
};

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, type }) => {
  return (
    <button type={type} className={styles.Button}>
      <p>{text}</p>
    </button>
  );
};
