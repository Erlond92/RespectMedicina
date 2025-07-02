import style from './dropDown.module.scss';
import React, { useRef, useState} from "react";
import Icon from '../../img/DropDownsvg.svg?react';

type Props = {
	title: string,
	children: React.ReactNode,
	selItem: string,
}

export const DropDown: React.FC<Props> = (props) => {
	const [isVisible, setVisible] = useState(false);
	const onClick = () => {
		setVisible(!isVisible);
		console.log('Open DropDown');
	};

	return (
		<div className={style.dropDown}>
			<p className={style.dropDown__title}>{props.title}</p>
			<div className={style.DropDown}>
				<button type={'button'} onClick={() => onClick()} className={style.DropDown__item}>
					<span>{ props.selItem }</span>
					{ (props.title == 'Клиники' || props.title == 'Оператор') ? <Icon/> : <></> }
				</button>
				<div className={style.DropDown__content} style={{display: (!isVisible) ? 'none' : 'block'}}>
					{props.children}
				</div>
			</div>
		</div>
	);
}