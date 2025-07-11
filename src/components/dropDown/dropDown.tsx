import style from "./dropDown.module.scss";
import React, { useState } from "react";

type Props = {
  title: string,
  children: React.ReactNode,
  selItem: string,
  icon: React.ReactNode,
};

export const DropDown: React.FC<Props> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={style.dropDown}>
      <p className={style.dropDown__title}>{props.title}</p>
      <div
        className={style.DropDown}
      >
        <button
          className={style.DropDown__item}
          type={"button"}
          onClick={() => onClick()}
        >
          <span>{props.selItem}</span>
          { props.icon }
        </button>
        <div
          className={style.DropDown__content}
          style={{ display: !isVisible ? "none" : "block"}}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
