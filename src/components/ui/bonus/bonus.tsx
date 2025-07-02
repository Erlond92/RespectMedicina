import React, {useState} from "react";
import style from './bonus.module.scss';

type Props = {
	isBonus: boolean,
}

export const Bonus: React.FC<Props> = (props) => {
	const [bonus, setBonus] = useState('Отправить');
	const onClick = (e: React.MouseEvent) => {
		if (e.target instanceof HTMLButtonElement) {
			if (!e.target.disabled) {
				e.target.disabled = true;
				e.target.className = style.Disable;
				setBonus('Готово!');
			}
		}
	}
	if (props.isBonus) {
		return <button onClick={(e) => onClick(e)} className={style.Bonus}>{ bonus }</button>;
	} else {
		return <button className={style.Disable}>Готово!</button>
}
}