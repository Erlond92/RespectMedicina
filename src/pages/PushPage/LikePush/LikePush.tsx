import style from "@/pages/PushPage/PushPage.module.scss";
import {Icons} from "@/img/icons";
import {Images} from "@/img/images";

export const LikePush = () => {
	return (<div className={style.PushPage}>
		<Icons.DoctorLike className={style.PushPage__image}/>

		<div className={style.PushPage__content}>
			<h2>
				Мы очень рады, что обслуживание в Нашей Клинике Вам понравилось!
			</h2>

			<div>
				<p>
					Расскажите, понравилось ли Вам обслуживание?
				</p>
				<p>
					После публикации отзыва мы перечислим на баланс Вашего телефона 200 рублей.
				</p>
			</div>

			<div className={style.LikePage}>
				<a href="#" className={style.LikePage_yandex}>
					<img src={Images.YandexMapIcon} alt="#"/>
					<img src={Images.YandexMapText} alt="#"/>
				</a>
				<a href="#" className={style.LikePage_twoGIS}>
					<img src={Images.TwoGIS} alt="#"/>
				</a>
				<a href="#" className={style.LikePage_proDoctor}>
					<img src={Images.ProDoctorIcon} alt="#"/>
					<img src={Images.ProDoctorText} alt="#"/>
				</a>
			</div>
		</div>
	</div>);
};