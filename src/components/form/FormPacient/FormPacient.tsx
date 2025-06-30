import React, {useState} from "react";
import {isClinic, isPacient} from "../../../redux/toggle";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../redux/store";
import style from "../Form.module.scss";
import {Input} from "../../input/Input";
import {addPacient} from "../../../redux/pacientList";

type Props = {
	id: string,
}

export const FormPacient: React.FC<Props> = (props) => {
	const distpach = useDispatch();
	const menuCancel = () => {
		distpach(isPacient());
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		distpach(isClinic());
		const form = e.target;
		if (!(form instanceof HTMLFormElement)) return ;
		const { elements } = form;
		const formData = new Map();
		Array.from(elements)
			.forEach((element) => {
				if (!(element instanceof HTMLInputElement)) return ;
				const { name, value } = element;
				formData.set(name, value);
			});
		if (formData.get('name') == '' && formData.get('phone') == '' && formData.get('doctor') == '' && formData.get('info')) return;
		distpach(addPacient({
			name: formData.get('name'),
			phone: formData.get('phone'),
			doctor: formData.get('doctor'),
			doctor_pro: '',
			info: formData.get('info'),
		}));
	};

	const isModal = useSelector((state: RootState) => state.toggle.togglePacientMenu);
	const [values, setValues] = useState({
		name: '',
		phone: '',
		doctor: '',
		info: '',
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
		{ (isModal) ? <>
			<button onClick={() => {distpach(isPacient())}} type={'button'} className={style.Overlay} >
				<form className={style.Form} onSubmit={(e) => {onSubmit(e)}}>
					<h1>Добавить пациент</h1>
					<div className={style.Form__input}>
						<Input type={'name'} value={values.name} placeholder={'Название клиники'}
									 onInput={(name: string, value: string) => changeValues(name, value)}/>
						<Input type={'phone'} value={values.phone} placeholder={'Телефон'}
									 onInput={(name: string, value: string) => changeValues(name, value)}/>
						<Input type={'doctor'} value={values.doctor} placeholder={'Доктор'}
									 onInput={(name: string, value: string) => changeValues(name, value)}/>
						<Input type={'info'} value={values.info} placeholder={'Комментарий'}
									 onInput={(name: string, value: string) => changeValues(name, value)}/>
					</div>
					<div className={style.Form__buttons}>
						<button
							type="button"
							onClick={() => menuCancel()}
							className={style.Form__buttons__cancel}
						>Отмена</button>
						<button
							type="submit"
							className={style.Form__buttons__add}
						>Добавить</button>
					</div>
				</form>
			</button>
		</> : <></> }
	</>
};