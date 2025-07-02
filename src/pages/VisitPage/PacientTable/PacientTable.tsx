import React, { useRef } from "react";
import style from "./PacientTable.module.scss";
import { PacientClinic } from "./PacientClinic/PacientClinic";
import { Checkbox } from "@/components/input/checkbox/checkbox";
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
  const mainRef = useRef(null);
  const otherRef: React.RefObject<HTMLInputElement>[] = [];

  const onClick = (e: React.MouseEvent) => {
    if (e.target) return;
    if (e.target == mainRef.current) {
      otherRef.map((itemRef) => {
        itemRef.current.checked = true;
      });
    }
  };

  if (props.type == "Clinic") {
    return (
      <div className={style.Table}>
        <table>
          <thead>
            <tr>
              <th>
                <Checkbox onClick={(e) => onClick(e)} />
              </th>
              <th className={style.Table__title}>Пациент</th>
            </tr>
          </thead>
          <tbody>
            {props.pacientList.map((pacient, index) => (
              <PacientClinic
                key={index}
                name={pacient.name}
                phone={pacient.phone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (props.type == "Visit") {
    return (
      <div className={style.Table}>
        <table>
          <thead>
            <tr>
              <th scope="col" className={style.Table__checkbox}>
                <Checkbox onClick={(e) => onClick(e)} />
              </th>
              <th scope="col">Пациент</th>
              <th scope="col">Доктор</th>
              <th scope="col" className={style.Table__info}>
                Комментарий
              </th>
              <th scope="col" className={style.Table__icon}></th>
              <th scope="col" className={style.Table__icon}></th>
              <th scope="col" className={style.Table__icon}></th>
            </tr>
          </thead>
          <tbody>
            {props.pacientList.map((pacient, index) => (
              <PacientVisit
                key={index}
                name={pacient.name}
                phone={pacient.phone}
                doctor={pacient.doctor}
                doctor_pro={pacient.doctor_pro}
                info={pacient.info}
                info_visits={pacient.info_visits}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
