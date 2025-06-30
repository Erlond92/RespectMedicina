import type {Pacient} from "../PacientTable.tsx";
import React from "react";
import {Checkbox} from "../../../../components/input/checkbox/checkbox";
import style from "../PacientTable.module.scss";
import Icon from '../../../../img/Icon.svg?react';
import Delete from '../../../../img/Delete.svg?react';

export const PacientVisit: React.FC<Pacient> = (props) => {
	return <tr>
		<th>
			<Checkbox/>
		</th>
		<th className={style.Table__pacient}>
			<h2>{ props.name }</h2>
			<h5>{ props.phone }</h5>
		</th>
		<th>
			<h2>{ props.doctor }</h2>
			<h5>{ props.doctor_pro }</h5>
		</th>
		<th>
			{ props.info }
		</th>
		<th>
			<Icon/>
		</th>
		<th>
			{ props.info_visits }
		</th>
		<th>
			<button className={style.Table__delete}>
				<Delete/>
			</button>
		</th>
	</tr>
};