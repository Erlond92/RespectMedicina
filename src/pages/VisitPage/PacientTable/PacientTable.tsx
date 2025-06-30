import React from "react";
import style from "./PacientTable.module.scss";
import { PacientClinic } from "./PacientClinic/PacientClinic";
import { Checkbox } from "../../../components/input/checkbox/checkbox";
import { PacientVisit } from "./PacientVisit/PacientVisit";

type Props = {
  type: "Clinic" | "Visit" | string;
  pacientList: Pacient[];
};

export type Pacient = {
  name: string;
  phone: string;
  doctor?: string;
  doctor_pro?: string;
  info?: string;
  info_visits?: number;
};

export const PacientTable: React.FC<Props> = (props) => {
  if (props.type == "Clinic") {
    return (
      <table className={style.Table}>
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            <th className={style.Table__title}>Пациент</th>
          </tr>
        </thead>
        <tbody>
          {props.pacientList.keys().map((pacientId: number) => (
            <PacientClinic
              name={props.pacientList[pacientId].name}
              phone={props.pacientList[pacientId].phone}
            />
          ))}
        </tbody>
      </table>
    );
  }
  if (props.type == "Visit") {
    return (
      <div className={style["Table-box"]}>
        <table className={style.Table}>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th className={style.Table__title}>Пациент</th>
              <th>Доктор</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {props.pacientList.keys().map((pacientId: number) => (
              <PacientVisit
                name={props.pacientList[pacientId].name}
                phone={props.pacientList[pacientId].phone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
