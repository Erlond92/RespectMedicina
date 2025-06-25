import Clinic from '../../img/Clinic.svg?react';
import Star from '../../img/Star.svg?react';
import Visit from '../../img/Visit.svg?react'
import Chart from '../../img/Chart.svg?react';
import MEDODS from '../../img/MEDODS.svg?react';
import style from './sideMenu.module.scss';
import {UserAvatar} from "./userAvatar/userAvatar";

export const SideMenu = () => {
    return (
        <div className={style.sideMenu}>
            <img src="img/Logo.png" alt="logo"/>
            <ul className={style.List}>
                <li className={style.List__line}>
                    <button className={style.Button}>
                        <Clinic/>
                        <p>Клиники</p>
                    </button>
                </li>
                <li className={style.List__line}>
                    <button className={style.Button}>
                        <Star/>
                        <p>Отзывы</p>
                    </button>
                </li>
                <li className={style.List__line}>
                    <button className={style.Button}>
                        <Visit/>
                        <p>Визиты</p>
                    </button>
                </li>
            </ul>
            <ul className={style.List}>
                <li className={style.List__line}>
                    <button className={style.Button}>
                        <Chart/>
                        <p>Аналитика</p>
                    </button>
                </li>
                <li className={style.List__line}>
                    <button className={style.Button}>
                        <MEDODS/>
                        <p>MEDODS</p>
                    </button>
                </li>
            </ul>
            <div className={style.Users}>
                <UserAvatar symbol={'B'}/>
                <p>Морару Валентин</p>
            </div>
        </div>
    );
};