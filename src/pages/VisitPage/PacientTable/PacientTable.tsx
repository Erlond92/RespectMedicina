import React, {useEffect, useRef} from "react";
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
	const mainRef = useRef(null);
	let otherRef: React.RefObject<any>[] = [];

	const onClick = (e: React.MouseEvent) => {
		if (e.target) return ;
		if (e.target == mainRef.current) {
			otherRef.map((itemRef) => {
				itemRef.current.checked = true;
			})
		}
	}

	if (props.type == "Clinic") {
		return (
			<div className={style.Table}>
				<table>
					<thead>
					<tr>
						<th>
							<Checkbox onClick={(e) => onClick(e)}/>
						</th>
						<th className={style.Table__title}>Пациент</th>
					</tr>
					</thead>
					<tbody>
					{props.pacientList.keys().map((pacientId: number) => {
						return (<PacientClinic
							name={props.pacientList[pacientId].name}
							phone={props.pacientList[pacientId].phone}
						/>);
					})}
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
						<th scope="col" className={style.Table__checkbox}><Checkbox onClick={(e) => onClick(e)}/></th>
						<th scope="col">Пациент</th>
						<th scope="col">Доктор</th>
						<th scope="col" className={style.Table__info}>Комментарий</th>
						<th scope="col" className={style.Table__icon}></th>
						<th scope="col" className={style.Table__icon}></th>
						<th scope="col" className={style.Table__icon}></th>
					</tr>
					</thead>
					<tbody>
					{props.pacientList.keys().map((pacientId: number) => {
						return (<PacientVisit
							name={props.pacientList[pacientId].name}
							phone={props.pacientList[pacientId].phone}
							doctor={props.pacientList[pacientId].doctor}
							doctor_pro={props.pacientList[pacientId].doctor_pro}
							info={props.pacientList[pacientId].info}
							info_visits={props.pacientList[pacientId].info_visits}
						/>);
					})}
					</tbody>
				</table>
			</div>
		);
	}
};
