import style from './review.module.scss';
import ProIcon from '../../../img/proIcon.svg?react';
import YandexIcon from '../../../img/yandex.svg?react'

type Props = {
	reviews: ('none' | 'pro' | 'yandex')[],
}

export const Reviews: React.FC<Props> = (props) => {
	return (<div className={style.Bonus}>
		{
			props.reviews.map((review) => {
				return <div className={style.Bonus__Item}>
					{ (review == 'pro') ? <>
						<ProIcon/>
						<p className={style.Bonus__Item_pro}>Pro</p>
					</> : <></>}

					{ (review == 'yandex') ? <>
						<YandexIcon/>
						<p className={style.Bonus__Item_yandex}>Яндекс</p>
					</> : <></>}
				</div>
			})
		}
	</div>)
};