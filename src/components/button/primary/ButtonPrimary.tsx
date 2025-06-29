import styles from './ButtonPrimary.module.scss';
import React from "react";
import { useNavigate } from 'react-router-dom';

export const ButtonPrimary = () => {
    const navigate = useNavigate();

    const checkData = (e: React.FormEvent) => {
        e.preventDefault();
        const form = document.getElementById('formAuthorization');
        // @ts-expect-error
        const formData = Object.fromEntries(new FormData(form));
        if (formData.login == 'admin' && formData.password == 'admin') {
            navigate('/clinic');
        }
    };

    return (
        <button onClick={(e) => {checkData(e)}} className={styles.Button}>
            <p>Войти</p>
        </button>
    );
};