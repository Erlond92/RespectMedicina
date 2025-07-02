import ClinicIcon from "../../../img/ClinicIcon.svg?react";
import style from "./Clinic.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ClinicProps {
  id: number;
  name: string;
  address: string;
}

export const Clinic: React.FC<ClinicProps> = (props) => {
  const naviget = useNavigate();

  const toClinic = (id: string) => {
    naviget(`/clinic/${id}`);
  };

  return (
    <tr
      className={style.Clinic}
      onClick={() => {
        toClinic(props.id.toString());
      }}
    >
      <th scope="row" className={style.Clinic__name}>
        <h2>{props.name}</h2>
        <p>{props.address}</p>
      </th>
      <td>
        <ClinicIcon />
      </td>
    </tr>
  );
};
