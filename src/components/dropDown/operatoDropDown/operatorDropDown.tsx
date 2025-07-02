import React, {useEffect, useState} from "react";
import {DropDown} from "../dropDown";
import {useSelector} from "react-redux";
import type {RootState} from "../../../redux/store.ts";
import style from '../clinicDropDown/clinicDropDown.module.scss';
import Search from '../../../img/search.svg?react';
import {Checkbox} from "../../input/checkbox/checkbox";

type Props = {
	isPro: boolean,
};

export const OperatorDropDown: React.FC<Props> = (props) => {
	type Doctor = { name: string, pro: string[] };

	const doctorList = useSelector((state: RootState) => { return state.doctorList });
	const selectItem: Doctor[] = [];
	const [ selItem, selSelItem] = useState('Выберите оператора');
	const addSelectItem = (e: React.MouseEvent, item: Doctor) => {
		if (!e.target) return ;
		if (!(e.target instanceof HTMLInputElement)) return ;
		if (e.target.checked) {
			selectItem.push(item);
		} else {
			let index = selectItem.findIndex((element) => {element == item});
			selectItem.slice(index, 1);
		}
		console.log(selectItem);
		if (  selectItem.length > 1 ) {
			selSelItem(`Выбрано ${selectItem.length}`);
		} else {
			if ( selectItem.length > 0) {
				selSelItem(selectItem[0].name);
			} else {
				selSelItem('Выберите клинику');
			}
		}
	}

	return (
		<DropDown
			title={'Оператор'}
			selItem={selItem}
		>
			<div className={style.DropDown__Menu}>
				<div className={style.DropDown__menu__header}>
					<input type="text" placeholder={'Поиск...'}/>
					<Search/>
				</div>
				<div className={style.DropDown__menu__content}>
					{ doctorList.map((doctor) => {
						return <div className={style.DropDown__menu__item}>
							<Checkbox onClick={(e) => {addSelectItem(e, doctor)}}/>
							<label className={style.DropDown__menu__item__text}>{doctor.name}</label>
						</div>
					})}
				</div>
			</div>
		</DropDown>
	);
};