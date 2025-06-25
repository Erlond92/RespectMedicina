import {Input} from "../../components/input/Input";
import {ButtonPrimary} from "../../components/button/primary/ButtonPrimary";
import styles from './Authorization.module.scss';
import {useSelector} from "react-redux";
import type {RootState} from "../../App.tsx";


export const AuthorizationPage = () => {
    const isErrorAuthorization = useSelector((state: RootState) => state.errorAuthorization.isError);

    return (
        <div className={styles.Window}>
            <h1>Авторизация</h1>
            <div style={{ width: '100%'}}>
                <form id={'formAuthorization'} onSubmit={(e) => {e.preventDefault()}} className={styles.Form}>
                    <Input type={'login'}/>
                    <Input type={'password'}/>
                </form>
                { (isErrorAuthorization) ? <p className={styles.Error}>Неправильно введены данные</p> : <></> }
            </div>
            <ButtonPrimary />
    </div>
    );
};