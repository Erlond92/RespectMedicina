import style from './SmsState.module.scss';
import {CustomRadio} from "@/components/customRadio/CustomRadio.tsx";
import {useState} from "react";

export const SmsState = () => {
	const [ isActive, setIsActive ] = useState(true);
	const funIsActiveve = (onClick: boolean) => {
		if (onClick) setIsActive(!isActive);
		return isActive;
	}

	return <div className={style.SmsState}>

		<CustomRadio name={'Отправка СМС операторам клиники'} isActive={funIsActiveve}/>

		<textarea name="sms" id="sms"></textarea>

		<div className={style.SmsState__content}>
			<textarea name="sample" id="sample"></textarea>
			<textarea name="final" id="final"></textarea>
		</div>

		<h5>*длина СМС без учета имени пациента и сгенерированной ссылки</h5>

		<button type={'button'} className={style.SmsState_button}>
			Сохранить
		</button>
	</div>
}