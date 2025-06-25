import styles from './Input.module.scss';
import EyeOn from '../../img/Eye-on.svg?react';
import EyeOff from '../../img/Eye-off.svg?react';
import React, {useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../../App.tsx";

export interface inputProps {
    type: 'login' | 'password';
}

export const Input: React.FC<inputProps> = props =>  {
    const isErrorAuthorization = useSelector((state: RootState) => state.errorAuthorization.isError);
    const [isEmpty, setIsEmpty] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    let defaultValue = '';
    switch (props.type) {
        case 'login':
            defaultValue = 'Введите логин';
            break;
        case "password":
            defaultValue = 'Введите пароль';
            break;
    }

    // @ts-ignore
    const onClick = (e) => {
        if (e.target.value == defaultValue) {
            e.target.value = '';
        }
    };

    // @ts-ignore
    const onBlur = (e) => {
        if (e.target.value == '') {
            e.target.value = defaultValue;
        }
    };

    // @ts-ignore
    const onInputCapture = (e) => {
        if (e.target.value == '') {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }
    return (
        <div className={styles.Input}
             style={{
                 border: (isErrorAuthorization) ? '1px #E30206 solid' : 'none'
             }}
        >
            <input
                id = { props.type }
                type = { (props.type=='password' && !showPassword && !isEmpty ) ? 'password' :'text' }
                name={props.type}
                defaultValue={defaultValue}
                onClick={onClick}
                onBlur={onBlur}
                onInputCapture={onInputCapture}
            />
            { (props.type == 'password') ?
                <button onClick={() => { setShowPassword(!showPassword) }}  >
                    { (!showPassword) ? <EyeOn/> : <EyeOff/> }
                </button>
                : <></>
            }
        </div>
    );
};