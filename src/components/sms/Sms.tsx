import React from "react";
import style from './Sms.module.scss';

type Props = {
	currentSms: number
}

export const Sms: React.FC<Props> = (props) => {
	return (
		<footer className={style.Footer}>
			<button className={(props.currentSms > 100) ? style.Footer__button_error : style.Footer__button_good}>
				Отправить СМС
			</button>
			<p className={style.Footer__text}>
				Отправлено смс: <p className={ (props.currentSms > 100) ? style.Footer__text__error : style.Footer__text_good}>{ props.currentSms.toString() }</p><p className={style.Footer__text_last}>/100</p>
			</p>
		</footer>
);
};