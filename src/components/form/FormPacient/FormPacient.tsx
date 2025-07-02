import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import style from "../Form.module.scss";
import {Input} from "../../input/Input";
import {addPacient} from "../../../redux/pacientList";

type Props = {
    id: string,
    isClose: boolean,
    onClose: () => void,
}

export const FormPacient: React.FC<Props> = (props) => {
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
        if (formData.get('name') == '' && formData.get('phone') == '' && formData.get('doctor') == '' && formData.get('info')) return;
		distpach(addPacient({
			name: formData.get('name'),
			phone: formData.get('phone'),
			doctor: formData.get('doctor'),
			info: formData.get('info')
		}));
    };

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

	const onClick = (e: MouseEvent) => {
		if (overlayRef.current == e.target) {
			props.onClose();
		}
	}

	useEffect(() => {
		document.addEventListener('click', (e) => { onClick(e) });
		return () => document.removeEventListener('click', (e) => { onClick(e) });
	}, []);

    return <>
        {(props.isClose) ? <div className={style.Overlay} ref={overlayRef}>
			<form className={style.Form} onSubmit={(e) => {
				onSubmit(e)
			}}>
				<h1>Добавить пациент</h1>
				<div className={style.Form__input}>
					<Input type={'name'} value={values.name} placeholder={'ФИО'}
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
						onClick={() => props.onClose()}
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
};