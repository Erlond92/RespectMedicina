import Plus from '../../../img/Plus.svg?react';
import style from './addPacient.module.scss';
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {clinicList} from "../../redux";

export const AddPacient = () => {
    const [AddMenu, setAddMenu] = useState(false);
    const distpach = useDispatch();
    // @ts-ignore
    const onClick = (e) => {
        if (e.target.value == e.target.defaultValue) {
            e.target.value = '';
        }
    };

    // @ts-ignore
    const onBlur = (e) => {
        if (e.target.value == '') {
            e.target.value = e.target.defaultValue;
        }
    };

    const menuCancel = () => {
        setAddMenu(false);
    };

    const addClinic = (e: React.FormEvent) => {
        e.preventDefault();

        const form = (e.target as HTMLFormElement).form;
        const formData = Object.fromEntries(new FormData(form));
        distpach(clinicList.actions.addClinic({
            id: Date.now().toString(),
            name: (typeof formData.name == 'string') ? formData.name : '',
            address: (typeof formData.address == 'string' && typeof formData.city == 'string') ? `${formData.city}, ${formData.address}`: ''
        }))
        setAddMenu(false);
    };

    return (
        <>{(AddMenu) ?
            <div className={style.Overlay}>
                <div className={style.Form}>
                    <h1>Добавить пациента</h1>
                    <form id="Form">
                        <input name="name" type="text" defaultValue="ФИО" onClick={onClick}
                               onBlur={onBlur}/>
                        <input name="phoneNumber" type="text" defaultValue="Телефон" onClick={onClick} onBlur={onBlur}/>
                        <input name="doctor" type="text" defaultValue="Доктор" onClick={onClick} onBlur={onBlur}/>
                        <input name="comm" type="text" defaultValue="Комментарий" onClick={onClick} onBlur={onBlur}/>

                        <div className={style.Form__buttons}>
                            <button
                                type="button"
                                onClick={() => menuCancel()}
                                className={style.Form__buttons__cancel}
                            >
                                Отмена
                            </button>
                            <button
                                type="button"
                                onClick={(e) => addClinic(e)}
                                className={style.Form__buttons__add}
                            >
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div> : <></>}
            <button className={style.Button} onClick={() => {
                setAddMenu(true);
            }}>
                <Plus/>
                <p>Добавить пациента</p>
            </button>
        </>

    );
}