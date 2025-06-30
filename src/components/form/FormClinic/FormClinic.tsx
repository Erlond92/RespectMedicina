import {isClinic} from "../../../redux/toggle";
import React, {useCallback, useEffect, useState} from "react";
import {addClinic} from "../../../redux/clinicList";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../redux/store";
import style from "../Form.module.scss";
import {Input} from "../../input/Input";

export const FormClinic = () => {
	const distpach = useDispatch();
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		distpach(isClinic());
		const form = e.target;
		if (!(form instanceof HTMLFormElement)) return;
		const {elements} = form;
		const formData = new Map();
		Array.from(elements)
			.forEach((element) => {
				if (!(element instanceof HTMLInputElement)) return;
				const {name, value} = element;
				formData.set(name, value);
			});
		if (formData.get('name') == '' && formData.get('city') == '' && formData.get('address') == '') return;
		distpach(addClinic({
			name: formData.get('name'),
			address: `г. ${formData.get('city')}, ${formData.get('address')}`,
		}));
	};

	const isModal = useSelector((state: RootState ) => {
		return state.toggle.toggleClinicMenu
	});

	const [values, setValues] = useState({
		name: '',
		city: '',
		address: '',
		slug: '',
		sms: '',
		email: '',
		info: ''
	});
	const changeValues = (name: string, value: string) => {
		setValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	return <>
		{ (isModal) ? <button onClick={() => {
			distpach(isClinic())
		}} type={'button'} className={style.Overlay}>
			<form className={style.Form} onSubmit={(e) => {
				onSubmit(e)
			}}>
				<h1>Добавить клинику</h1>
				<div className={style.Form__input}>
					<Input type={'name'} value={values.name} placeholder={'Название клиники'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'city'} value={values.city} placeholder={'Город'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'address'} value={values.address} placeholder={'Адрес'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'slug'} value={values.slug} placeholder={'Слаг'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'sms'} value={values.sms} placeholder={'SMS стоимость'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'email'} value={values.email} placeholder={'Почта'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'info'} value={values.info} placeholder={'Информация'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
				</div>
				<div className={style.Form__buttons}>
					<button
						type="button"
						onClick={() => distpach(isClinic())}
						className={style.Form__buttons__cancel}
					>Отмена
					</button>
					<button
						type="submit"
						className={style.Form__buttons__add}
					>Добавить
					</button>
				</div>
			</form>
		</button> : <></>}
	</>
}
