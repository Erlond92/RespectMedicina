import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import style from './Analitic.module.scss';
import defaultStyle from "../../defaultStyles.module.scss";
import {SideMenu} from "@/components/sideMenu/sideMenu";
import {Icons} from "@/img/icons";
import {Calendar} from "@/components/dropDown/calendar/Calendar";
import {Review} from "@/pages/AnaliticPage/Review/Review";
import {Grafics} from "@/pages/AnaliticPage/Grafics/Grafics";
import {Rate} from "@/components/rate/rate.tsx";

type Props = {
	id: number,
	name: string,
	address: string,
};

export const Analitic: React.FC<Props> = (props)  => {
	const navigate = useNavigate();

	type ObjectType = {
		[key: string]: {
			visible: boolean;
			rating: number;
			ratingChange?: string;
			review: number;
			reviewChange?: string;
			grade: number;
			gradeChange?: string;
		};
	};


	const reviews: ObjectType = {
		'twoGis': {
			visible: true,
			rating: 4.8,
			ratingChange: '-0.1',
			review: 50,
			reviewChange: '-5',
			grade: 185,
			gradeChange: '+8',
		},
		'sber': {
			visible: true,
			rating: 4.8,
			ratingChange: '+0.1',
			review: 103,
			reviewChange: '+5',
			grade: 185,
			gradeChange: '+8',
		},
		'yandexMap': {
			visible: true,
			rating: 4.8,
			ratingChange: '-0.1',
			review: 50,
			reviewChange: '-5',
			grade: 185,
			gradeChange: '+8',
		},
		'prodoctor': {
			visible: true,
			rating: 4.8,
			ratingChange: '-0.1',
			review: 50,
			reviewChange: '-5',
			grade: 185,
			gradeChange: '+8',
		},
		'googleMaps': {
			visible: false,
			rating: 4.8,
			review: 50,
			grade: 185,
		},
		'naPopranku': {
			visible: false,
			rating: 4.8,
			review: 50,
			grade: 185,
		},
	}

	const dataRating = [
		{ name: '1.05.2025', prodDoktorov: 4.0, sberZdorovie: 3.0, yandexKart: 0.5, twoGis: 0.1 },
		{ name: '2.05.2025', prodDoktorov: 3.8, sberZdorovie: 3.1, yandexKart: 0.7, twoGis: 0.2 },
		{ name: '3.05.2025', prodDoktorov: 3.9, sberZdorovie: 3.0, yandexKart: 2.1, twoGis: 0.5 },
		{ name: '4.05.2025', prodDoktorov: 4.1, sberZdorovie: 3.2, yandexKart: 0.9, twoGis: 0.3 },
		{ name: '5.05.2025', prodDoktorov: 3.7, sberZdorovie: 2.9, yandexKart: 1.2, twoGis: 0.4 },
		{ name: '6.05.2025', prodDoktorov: 3.6, sberZdorovie: 3.0, yandexKart: 1.5, twoGis: 0.6 },
		{ name: '7.05.2025', prodDoktorov: 3.8, sberZdorovie: 3.1, yandexKart: 1.8, twoGis: 0.7 },
		{ name: '8.05.2025', prodDoktorov: 4.0, sberZdorovie: 3.3, yandexKart: 2.0, twoGis: 0.8 },
		{ name: '9.05.2025', prodDoktorov: 3.9, sberZdorovie: 3.2, yandexKart: 1.7, twoGis: 0.6 },
		{ name: '10.05.2025', prodDoktorov: 4.2, sberZdorovie: 3.4, yandexKart: 2.2, twoGis: 0.9 },
		{ name: '11.05.2025', prodDoktorov: 4.1, sberZdorovie: 3.5, yandexKart: 2.5, twoGis: 1.0 },
		{ name: '12.05.2025', prodDoktorov: 4.3, sberZdorovie: 3.6, yandexKart: 2.8, twoGis: 1.2 },
		{ name: '13.05.2025', prodDoktorov: 4.0, sberZdorovie: 3.4, yandexKart: 2.3, twoGis: 0.9 },
		{ name: '14.05.2025', prodDoktorov: 3.8, sberZdorovie: 3.2, yandexKart: 1.9, twoGis: 0.7 },
		{ name: '15.05.2025', prodDoktorov: 3.7, sberZdorovie: 3.1, yandexKart: 1.6, twoGis: 0.5 },
		{ name: '16.05.2025', prodDoktorov: 3.9, sberZdorovie: 3.3, yandexKart: 2.0, twoGis: 0.8 },
		{ name: '17.05.2025', prodDoktorov: 4.1, sberZdorovie: 3.5, yandexKart: 2.4, twoGis: 1.1 },
		{ name: '18.05.2025', prodDoktorov: 4.2, sberZdorovie: 3.6, yandexKart: 2.7, twoGis: 1.3 },
		{ name: '19.05.2025', prodDoktorov: 4.0, sberZdorovie: 3.4, yandexKart: 2.2, twoGis: 1.0 },
		{ name: '20.05.2025', prodDoktorov: 3.8, sberZdorovie: 3.2, yandexKart: 1.8, twoGis: 0.8 },
		{ name: '21.05.2025', prodDoktorov: 3.6, sberZdorovie: 3.0, yandexKart: 1.5, twoGis: 0.6 },
		{ name: '22.05.2025', prodDoktorov: 3.7, sberZdorovie: 3.1, yandexKart: 1.7, twoGis: 0.7 },
		{ name: '23.05.2025', prodDoktorov: 3.9, sberZdorovie: 3.3, yandexKart: 2.0, twoGis: 0.9 },
		{ name: '24.05.2025', prodDoktorov: 4.1, sberZdorovie: 3.5, yandexKart: 2.3, twoGis: 1.1 },
		{ name: '25.05.2025', prodDoktorov: 4.2, sberZdorovie: 3.6, yandexKart: 2.6, twoGis: 1.3 },
		{ name: '26.05.2025', prodDoktorov: 4.0, sberZdorovie: 3.4, yandexKart: 2.1, twoGis: 1.0 },
		{ name: '27.05.2025', prodDoktorov: 3.8, sberZdorovie: 3.2, yandexKart: 1.7, twoGis: 0.8 },
		{ name: '28.05.2025', prodDoktorov: 3.7, sberZdorovie: 3.1, yandexKart: 1.4, twoGis: 0.6 },
		{ name: '29.05.2025', prodDoktorov: 3.9, sberZdorovie: 3.3, yandexKart: 1.8, twoGis: 0.7 },
		{ name: '30.05.2025', prodDoktorov: 4.1, sberZdorovie: 3.5, yandexKart: 2.2, twoGis: 0.9 },
		{ name: '31.05.2025', prodDoktorov: 4.3, sberZdorovie: 3.7, yandexKart: 2.5, twoGis: 1.1 }
	];

	const dataTwo = [
		{ name: '1.05.2025', prodDoktorov: 15, sberZdorovie: 25, yandexKart: 35, twoGis: 10 },
		{ name: '2.05.2025', prodDoktorov: 18, sberZdorovie: 28, yandexKart: 36, twoGis: 12 },
		{ name: '3.05.2025', prodDoktorov: 20, sberZdorovie: 30, yandexKart: 37, twoGis: 21 }, // Соответствует значению из всплывающей подсказки
		{ name: '4.05.2025', prodDoktorov: 22, sberZdorovie: 32, yandexKart: 38, twoGis: 23 },
		{ name: '5.05.2025', prodDoktorov: 25, sberZdorovie: 35, yandexKart: 40, twoGis: 25 },
		{ name: '6.05.2025', prodDoktorov: 27, sberZdorovie: 37, yandexKart: 42, twoGis: 27 },
		{ name: '7.05.2025', prodDoktorov: 29, sberZdorovie: 39, yandexKart: 45, twoGis: 29 },
		{ name: '8.05.2025', prodDoktorov: 30, sberZdorovie: 40, yandexKart: 47, twoGis: 30 },
		{ name: '9.05.2025', prodDoktorov: 32, sberZdorovie: 42, yandexKart: 48, twoGis: 32 },
		{ name: '10.05.2025', prodDoktorov: 35, sberZdorovie: 45, yandexKart: 50, twoGis: 35 },
		{ name: '11.05.2025', prodDoktorov: 37, sberZdorovie: 47, yandexKart: 48, twoGis: 37 },
		{ name: '12.05.2025', prodDoktorov: 39, sberZdorovie: 49, yandexKart: 45, twoGis: 39 },
		{ name: '13.05.2025', prodDoktorov: 40, sberZdorovie: 50, yandexKart: 42, twoGis: 40 },
		{ name: '14.05.2025', prodDoktorov: 38, sberZdorovie: 48, yandexKart: 40, twoGis: 38 },
		{ name: '15.05.2025', prodDoktorov: 35, sberZdorovie: 45, yandexKart: 38, twoGis: 35 },
		{ name: '16.05.2025', prodDoktorov: 33, sberZdorovie: 43, yandexKart: 35, twoGis: 33 },
		{ name: '17.05.2025', prodDoktorov: 30, sberZdorovie: 40, yandexKart: 32, twoGis: 30 },
		{ name: '18.05.2025', prodDoktorov: 28, sberZdorovie: 38, yandexKart: 30, twoGis: 28 },
		{ name: '19.05.2025', prodDoktorov: 25, sberZdorovie: 35, yandexKart: 28, twoGis: 25 },
		{ name: '20.05.2025', prodDoktorov: 23, sberZdorovie: 33, yandexKart: 25, twoGis: 23 },
		{ name: '21.05.2025', prodDoktorov: 20, sberZdorovie: 30, yandexKart: 22, twoGis: 20 },
		{ name: '22.05.2025', prodDoktorov: 18, sberZdorovie: 28, yandexKart: 20, twoGis: 18 },
		{ name: '23.05.2025', prodDoktorov: 15, sberZdorovie: 25, yandexKart: 18, twoGis: 15 },
		{ name: '24.05.2025', prodDoktorov: 13, sberZdorovie: 23, yandexKart: 16, twoGis: 13 },
		{ name: '25.05.2025', prodDoktorov: 10, sberZdorovie: 20, yandexKart: 14, twoGis: 10 },
		{ name: '26.05.2025', prodDoktorov: 8, sberZdorovie: 18, yandexKart: 12, twoGis: 8 },
		{ name: '27.05.2025', prodDoktorov: 6, sberZdorovie: 16, yandexKart: 10, twoGis: 6 },
		{ name: '28.05.2025', prodDoktorov: 4, sberZdorovie: 14, yandexKart: 8, twoGis: 4 },
		{ name: '29.05.2025', prodDoktorov: 2, sberZdorovie: 12, yandexKart: 6, twoGis: 2 },
		{ name: '30.05.2025', prodDoktorov: 1, sberZdorovie: 10, yandexKart: 4, twoGis: 1 },
		{ name: '31.05.2025', prodDoktorov: 0, sberZdorovie: 8, yandexKart: 2, twoGis: 0 }
	];

	type ReviewsProps = {
		rating: number,
		name: string,
		date: string;
		review: string,
	}

	const reviewsData: ReviewsProps[] = [
		{
			rating: 5,
			name: "Виктория Мельникова",
			date: "24.04.2023",
			review: "Сын очень доволен! Мягкие, амортизирующие и способствуют нагрузкам для игр в волейбол."
		},
		{
			rating: 5,
			name: "Виктория Мельникова",
			date: "24.04.2023",
			review: "Хочу выразить благодарность врачу - терапевту. Это очень отзывчивый и внимательный врач. Она великолепно выполнила гигиену полости, обозначила проблемы."
		},
		{
			rating: 5,
			name: "Виктория Мельникова",
			date: "24.04.2023",
			review: "Отличные кроссовки! Спасибо за быструю доставку и помощь в выборе размера."
		},
		{
			rating: 4,
			name: "Алексей Петров",
			date: "25.04.2023",
			review: "Хороший сервис, но немного подорожали по сравнению с прошлым годом."
		},
		{
			rating: 5,
			name: "Ольга Смирнова",
			date: "26.04.2023",
			review: "Профессиональная консультация! Врач нашла время на все вопросы и объяснила лечение доступно."
		},

		// Новые негативные отзывы
		{
			rating: 2,
			name: "Дмитрий Кузнецов",
			date: "27.04.2023",
			review: "Качество ужасное! Через неделю носки протёрлись, хотя обещали долговечность."
		},
		{
			rating: 1,
			name: "Елена Федорова",
			date: "28.04.2023",
			review: "Полный разворот! Продукт не соответствует описанию, пришлось возвращать."
		},
		{
			rating: 2,
			name: "Иван Соколов",
			date: "29.04.2023",
			review: "Долгая доставка и некомпетентные менеджеры. Ужасный опыт покупки."
		},
		{
			rating: 1,
			name: "Наталья Лебедева",
			date: "30.04.2023",
			review: "Обман! Обещали бесплатную гарантию, а потом требовали доплату за каждый ремонт."
		},
		{
			rating: 2,
			name: "Артем Морозов",
			date: "01.05.2023",
			review: "Товар пришёл повреждённым, а в поддержке просто игнорировали запросы."
		}
	];

	const [ reviewMode, setReviewMode ] = useState('all');

	const onClickButton = ( mode: string) => {
		setReviewMode(mode);
	}

	return (
		<div className={defaultStyle.Page}>
			<SideMenu action={"Analitic"} />
			<div className={style.Analitic}>
				<header>
					<div className={style.Analitic__back}>
						<button
							onClick={() => {
								navigate("/analitic");
							}}
						>
							<Icons.BackIcon />
						</button>
						<div className={style.Analitic__title}>
							<h1>{props.name}</h1>
							<h5>{props.address}</h5>
						</div>
					</div>
					<div className={style.Analitic__title_other}>
						<Calendar/>
						<button type={"button"} className={style.Analitic__download}>
							<p>XLS</p>

							<Icons.DowloadIcon />
						</button>
					</div>
				</header>
				<div className={style.Analitic__contract}>
					<div className={style.Analitic__contract_main}>
						<div className={style.Analitic__contract_date}>
							<h2>12 сент. 2023г.</h2>
							<p>Дата начала договора</p>
						</div>
						<div className={style.Analitic__contract_remain}>
							<h2>1256</h2>
							<p>Остаток оповещений по договору</p>
						</div>
					</div>
					<div className={style.Analitic__contract_other}>
						<div className={style.Analitic__contract_item}>
							<h3>48</h3>
							<p>Оповещено</p>
						</div>
						<div className={style.Analitic__contract_item}>
							<h3>9</h3>
							<p>Перешли</p>
						</div>
						<div className={style.Analitic__contract_item}>
							<h3>6</h3>
							<p>Оставили отзыв</p>
						</div>
						<div className={style.Analitic__contract_item}>
							<h3>12.5%</h3>
							<p>Конверсия в отзыв</p>
						</div>
						<div className={style.Analitic__contract_item}>
							<h3>0</h3>
							<p>Перхват негатива</p>
						</div>
					</div>
				</div>
				<div className={style.Analitic__Reviews}>
					{ Object.keys(reviews).map((key) => {
						return <Review
							key={key}
							title={key}
							visible={reviews[key].visible}
							rating={reviews[key].rating}
							review={reviews[key].review}
							grade={reviews[key].grade}
							ratingChange={(reviews[key].visible) ? reviews[key].ratingChange : ''}
							reviewChange={(reviews[key].visible) ? reviews[key].reviewChange : ''}
							gradeChange={(reviews[key].visible) ? reviews[key].gradeChange : ''}/>
					})
					}
				</div>
				<Grafics title={'Рейтинг'} data={dataRating}/>
				<Grafics title={'Количество отзывов'} data={dataTwo}/>
				<div className={style.Analitic__reviews}>
					<h2>
						Отзывы
					</h2>
					<div className={style.Analitic__reviews_buttons}>
						<button className={(reviewMode == 'all' ? style.Analitic__reviews_buttons_select : style.Analitic__reviews_buttons_unselect)} type={'button'} onClick={() => onClickButton('all')}>Все</button>
						<button className={(reviewMode == 'posi' ? style.Analitic__reviews_buttons_select : style.Analitic__reviews_buttons_unselect)} type={'button'} onClick={() => onClickButton('posi')}>Положительные</button>
						<button className={(reviewMode == 'nega' ? style.Analitic__reviews_buttons_select : style.Analitic__reviews_buttons_unselect)} type={'button'} onClick={() => onClickButton('nega')}>Негативные</button>
					</div>
					<ul className={style.Analitic__reviews_list}>
						{ reviewsData.filter((element) => {
							switch (reviewMode) {
								case 'all':
									return true;
								case 'posi':
									return element.rating >= 4;
								case 'nega':
									return element.rating <= 3;
							}
						}).map((review) => {
							return <li key={reviewsData.indexOf(review)} className={style.Analitic__reviews_review}>
								<h3>{ review.name }</h3>
								<p className={style.Analitic__reviews_date}>{ review.date }</p>
								<div className={style.Analitic__reviews_rating}>
									<Rate rate={review.rating}/>
									<span>{ review.rating }</span>
								</div>
								<p className={style.Analitic__reviews_info}>{ review.review }</p>
							</li>
						})  }
					</ul>
				</div>

			</div>
		</div>
	)
};
