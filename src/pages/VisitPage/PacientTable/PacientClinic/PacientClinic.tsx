import style from '../PacientTable.module.scss';
import {Checkbox} from "../../../../components/input/checkbox/checkbox";
import React, {useRef} from "react";

type Props = {
	name: string,
	phone: string,
};

export const PacientClinic: React.FC<Props> = (props) => {
	const ref = useRef(null);
	return <tr>
		<th>
			<Checkbox onClick={(e) => {}}/>
		</th>
		<th className={style.Table__pacient}>
			<h2>{ props.name }</h2>
			<h5>{ props.phone }</h5>
		</th>
	</tr>
};
