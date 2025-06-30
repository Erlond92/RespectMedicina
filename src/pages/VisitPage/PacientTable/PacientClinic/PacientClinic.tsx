import style from '../PacientTable.module.scss';
import {Checkbox} from "../../../../components/input/checkbox/checkbox";

type Props = {
	name: string,
	phone: string,
};

export const PacientClinic: React.FC<Props> = (props) => {
	return <tr>
		<th>
			<Checkbox/>
		</th>
		<th className={style.Table__pacient}>
			<h2>{ props.name }</h2>
			<h5>{ props.phone }</h5>
		</th>
	</tr>
};
