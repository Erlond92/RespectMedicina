import style from "@/pages/PushPage/PushPage.module.scss";
import {Link} from "react-router-dom";
import {Icons} from "@/img/icons";

type Props = {
	name: string,
}

export const MainPush: React.FC<Props> = (props) => {
	return (<div className={style.PushPage}>
		<Icons.Doctor className={style.PushPage__image}/>

		<div className={style.PushPage__content}>
			<h1>
				{ props.name }, благодарим, что посетили Нашу Клинику!
			</h1>

			<p>
				Расскажите, понравилось ли Вам обслуживание?
			</p>

			<div className={style.PushPage__button}>
				<Link to={'/push/like'} className={style.PushPage__button_like}>
					Понравилось
				</Link>
				<Link to={'/push/claim'} className={style.PushPage__button_claim}>
					Есть претензии
				</Link>
			</div>
		</div>
	</div>);
}