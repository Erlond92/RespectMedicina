import React, { useEffect, useRef, useState } from "react";
import {useDispatch} from "react-redux";
import style from "../Form.module.scss";
import { Input } from "@/components/input/Input";
import {changeOperator} from "@/redux/operatorList.ts";

type Props = {
	isClose: boolean,
	onClose: () => void,
	id: number,
}

export const FormChangeOperator: React.FC<Props> = (props) => {
	const distpach = useDispatch();
	const overlayRef = useRef(null);
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onClose();
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
		distpach(changeOperator({
			id: props.id,
			name: formData.get('name'),
			email: formData.get('email'),
		}));
	};

	const [values, setValues] = useState({
		name: '',
		email: '',
	});
	const changeValues = (name: string, value: string) => {
		setValues((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	useEffect(() => {
		const onClickOverlay = (e: MouseEvent) => {
			if (overlayRef.current == null) return ;
			if (e.target == overlayRef.current) {
				props.onClose();
			}
		}
		document.addEventListener('click', (e) => { onClickOverlay(e) });
		return () => document.removeEventListener('click', (e) => { onClickOverlay(e) });
	}, [props.isClose]);

	return <>
		{(props.isClose) ? <div className={style.Overlay} ref={overlayRef}>
			<form className={style.Form} onSubmit={(e) => {
				onSubmit(e)
			}}>
				<h1>Редактировать оператора</h1>
				<div className={style.Form__input}>
					<Input type={'name'} value={values.name} placeholder={'Имя'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'email'} value={values.email} placeholder={'Почта'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
				</div>
				<div className={style.Form__buttons}>
					<button
						type="button"
						onClick={props.onClose}
						className={style.Form__buttons__cancel}
					>Отмена
					</button>
					<button
						type="submit"
						className={style.Form__buttons__add}
					>Сохранить
					</button>
				</div>
			</form>
		</div> : <></>}
	</>
}
