import Trash from '../../../img/Delete.svg?react';
import style from './remove.module.scss';
import {useState} from "react";

type Props = {
	onClick: () => void;
}

export const Remove: React.FC<Props> = (props) => {
	const [color, setColor] = useState('#1E1E1E');
	return <button className={style.Trash} onClick={() => {props.onClick()}}>
		<Trash stroke={color} onClick={() => {setColor('#E30206')}}/>
	</button>
}