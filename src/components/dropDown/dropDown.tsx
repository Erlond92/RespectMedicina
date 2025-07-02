import style from "./dropDown.module.scss";
import React, { useState } from "react";
import { Icons } from "@/img/icons";

type Props = {
  title: string;
  children: React.ReactNode;
  selItem: string;
};

export const DropDown: React.FC<Props> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!isVisible);
    console.log("Open DropDown");
  };

  return (
    <div className={style.dropDown}>
      <p className={style.dropDown__title}>{props.title}</p>
      <button
        className={style.DropDown}
        type={"button"}
        onClick={() => onClick()}
      >
        <div className={style.DropDown__item}>
          <span>{props.selItem}</span>
          {props.title == "Клиники" || props.title == "Оператор" ? (
            <Icons.Icon />
          ) : (
            <></>
          )}
        </div>
        <div
          className={style.DropDown__content}
          style={{ display: !isVisible ? "none" : "block" }}
        >
          {props.children}
        </div>
      </button>
    </div>
  );
};
