import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "../Form.module.scss";
import { Input } from "@/components/input/Input";
import {addOperator} from "@/redux/operatorList.ts";
import {RootState} from "@/redux/store.ts";

type Props = {
	isClose: boolean,
	onClose: () => void,
}

export const FormOperator: React.FC<Props> = (props) => {
	const operatorList = useSelector((state: RootState) => state.operatorList);
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
		distpach(addOperator({
			id: operatorList.length,
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
		}));
	};

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
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
				<h1>Добавить оператора</h1>
				<div className={style.Form__input}>
					<Input type={'name'} value={values.name} placeholder={'Имя'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'email'} value={values.email} placeholder={'Почта'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
					<Input type={'password'} value={values.password} placeholder={'Пароль'}
								 onInput={(name: string, value: string) => changeValues(name, value)}/>
				</div>
				<div className={style.Form__buttons}>
					<button
						type="button"
						onClick={() => {
							props.onClose()
						}}
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
		</div> : <></>}
	</>
}
