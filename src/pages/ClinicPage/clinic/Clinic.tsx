import ClinicIcon from '../../../img/ClinicIcon.svg?react';
import style from './Clinic.module.scss';
import React from "react";
import {useNavigate} from "react-router-dom";

interface ClinicProps {
    id: string,
    name: string,
    address: string
}

export const Clinic: React.FC<ClinicProps> = props => {
    const naviget = useNavigate();
    const toClinic = (id: string) => {
        naviget(`/clinic/${id}`)
    }

    return <div className={style.Clinic}>
        <div className={style.Clinic__name}>
            <h2>{props.name}</h2>
            <p>{props.address}</p>
        </div>
        <button onClick={() => {toClinic(props.id)}}>
            <ClinicIcon/>
        </button>
    </div>
};