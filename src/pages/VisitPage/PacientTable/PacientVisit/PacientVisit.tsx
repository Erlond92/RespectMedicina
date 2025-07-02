import React from "react";
import { Checkbox } from "@/components/input/checkbox/checkbox";
import style from "../PacientTable.module.scss";
import { Icons } from "@/img/icons";
import { MessageBubble } from "@/components/ui/message/message";
import { Remove } from "@/components/ui/remove/remove";

export type Props = {
  name: string;
  phone: string;
  doctor?: string;
  doctor_pro?: string;
  info?: string;
  info_visits?: number;
};

export const PacientVisit: React.FC<Props> = (props) => {
  return (
    <>
      <tr>
        <td scope="row">
          <Checkbox onClick={() => {}} />
        </td>
        <td>
          <div className={style.Table__pacient}>
            <h2>{props.name}</h2>
            <h5>{props.phone}</h5>
          </div>
        </td>
        <td>
          <div className={style.Table__doctor}>
            <h2>{props.doctor}</h2>
            <h5>{props.doctor_pro}</h5>
          </div>
        </td>
        <td className={style.Table__info}>{props.info}</td>
        <td className={style.Table__icon}>
          <Icons.Icon />
        </td>
        <td className={style.Table__icon}>
          <MessageBubble n={props.info_visits} />
        </td>
        <td className={style.Table__icon}>
          <Remove onClick={() => {}} />
        </td>
      </tr>
    </>
  );
};
