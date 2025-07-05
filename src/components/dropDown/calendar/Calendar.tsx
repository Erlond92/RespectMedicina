import React, {useState} from 'react';
import {Icons} from "@/img/icons";
import style from './Calendar.module.scss';
import {DropDown} from "@/components/dropDown/dropDown.tsx";

export const Calendar: React.FC = () => {
	const [ name, setName ] = useState('01.02.2025 - 01.03.2025');
	const listYears = [];
	// const listMonth = []

	setName('');
	for (let i = 1900; i<=2030; i++) {
		listYears.push(i);
	}

	return (<div className={style.Calendar}>
		<DropDown
			title={'Календарь'}
			icon={ <Icons.CakendarIcon/> }
			selItem={name}
		>
			<div className={style.Calendar__years}>
				{ listYears.map( (year) => {
					return <button key={year}>{ year }</button>
				})}
			</div>
			<div></div>
			<div></div>
		</DropDown>
	</div>);
}