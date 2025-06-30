import { JSX } from "react";
import Plus from "../../../img/Plus.svg?react";
import style from "./addButton.module.scss";
import { useDispatch } from "react-redux";
import { isClinic } from "../../../redux/toggle";

type Props = {
  title: string;
  children?: JSX.Element;
};

export const AddButton: React.FC<Props> = ({title}) => {
  const distpatch = useDispatch();

  return (
    <button
      className={style.AddClinic}
      onClick={() => {
        distpatch(isClinic());
      }}
    >
      <Plus />
     {title}
    </button>
  );
};
