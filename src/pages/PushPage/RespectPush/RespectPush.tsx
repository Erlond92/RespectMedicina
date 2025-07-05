import style from "@/pages/PushPage/PushPage.module.scss";
import {Icons} from "@/img/icons";

export const RespectPush = () => {
	return (<div className={style.PushPage}>
		<Icons.DoctorRespect className={style.PushPage__image}/>

		<div className={`${style.RespectPush} ${style.PushPage__content}`}>
			<h1>
				Спасибо за сообщение!
			</h1>

			<p>
				Мы вернемся к Вам с решением.
			</p>
		</div>
	</div>);
}