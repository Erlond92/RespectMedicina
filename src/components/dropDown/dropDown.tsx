import style from "./dropDown.module.scss";
import React, { useEffect, useRef, useState} from "react";

type Props = {
  title: string,
  children: React.ReactNode,
  selItem: string,
  icon: React.ReactNode,
};

export const DropDown: React.FC<Props> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const onClickButton = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current == null) return ;
      if (dropRef.current instanceof HTMLDivElement && e.target instanceof Node) {
        if (!(dropRef.current.contains(e.target)) && isVisible) {
          setVisible(false);
        }
      }
    };
    document.addEventListener('click', (e) => onClick(e));
    return () => document.removeEventListener('click', (e) => onClick(e));
  }, [isVisible]);

  return (
    <div className={style.dropDown} ref={dropRef}>
      <p className={style.dropDown__title}>{props.title}</p>
      <div
        className={style.DropDown}
      >
        <button
          className={style.DropDown__item}
          type={"button"}
          onClick={() => onClickButton()}
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
