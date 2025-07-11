import style from "@/pages/PushPage/PushPage.module.scss";
import {Icons} from "@/img/icons";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
	name: string,
}

export const ClaimPush: React.FC<Props> = (props) => {
	const inputRef = useRef(null);
	const naviget = useNavigate();
	const onClick = () => {
		naviget('/push/respert')
	}

	return (<div className={style.PushPage}>
		<Icons.DoctorClaim  />

		<div className={`${style.PushPage__content} ${style.ClaimPush__content}`}>
			<h2>
				Напишите руководству
			</h2>

			<div>
				<p>
					{ props.name }, расскажите, пожалуйста, что Вам не понравилось в нашей клинике.</p>
				<p>
					Мы обязательно разберемся и предложим Вам решение проблемы.
				</p>
			</div>

			<div className={style.ClaimPush}>
				<textarea placeholder={'Опишите ситуацию'} ref={inputRef}/>
				<button type={'button'} onClick={() => { onClick() }}>
					Отправить
				</button>
			</div>
		</div>
	</div>);
};