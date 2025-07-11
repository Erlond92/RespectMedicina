import style from './Review.module.scss'
import { Icons } from '@/img/icons';
import {Images} from "@/img/images";

type Props = {
	title: string,
	visible: boolean
	rating: number,
	ratingChange?: string,
	review: number,
	reviewChange?: string,
	grade: number,
	gradeChange?: string,
}

export const Review: React.FC<Props> = (props) => {

	const OrgIcon = () => {
		switch (props.title) {
			case '2gis':
				return <img className={style.TwoGis} src={Images.TwoGis} alt="#"/>;
			case 'sber':
				return <Icons.SberIcon/>
			case 'yandexMap':
				return <Icons.YandexMaps/>
			case 'prodoctor':
				return <img className={style.ProDoctor} src={Images.ProDoctorTextReviws} alt={'#'}/>;
			case 'googleMaps':
				return <Icons.GoogleMaps/>
			case 'naPopranku':
				return <Icons.NaPopravku/>
			default:
				return <></>;
		}
	}

	return <div className={style.Review__Icon}>
		<OrgIcon/>
		<div className={style.Review}>
			<div className={`${style.Review__Item} ${(props.visible) ? '' : style.Review__Item_unvisible}`}>
				<div className={style.Review__Item_content}>
					<h3>{ props.rating }</h3>
					{ (props.visible) ? <p className={(Number(props.ratingChange) > 0) ? style.Review__Item_good : style.Review__Item_error }>{ props.ratingChange }</p> : <></> }
				</div>
				<p className={style.Review__Item_title}>Рейтинг</p>
			</div>
			<div className={`${style.Review__Item} ${(props.visible) ? '' : style.Review__Item_unvisible}`}>
				<div className={style.Review__Item_content}>
					<h3>{ props.review }</h3>
					{ (props.visible) ? <p className={(Number(props.reviewChange) > 0) ? style.Review__Item_good : style.Review__Item_error }>{ props.reviewChange }</p> : <></> }
				</div>
				<p className={style.Review__Item_title}>Отзывы</p>
			</div>
			<div className={`${style.Review__Item} ${(props.visible) ? '' : style.Review__Item_unvisible}`}>
				<div className={style.Review__Item_content}>
					<h3>{ props.grade }</h3>
					{ (props.visible) ? <p className={(Number(props.gradeChange) > 0) ? style.Review__Item_good : style.Review__Item_error }>{ props.gradeChange }</p> : <></> }
				</div>
				<p className={style.Review__Item_title}>Оценки</p>
			</div>
		</div>
	</div>
}