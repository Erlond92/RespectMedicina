import React, {useEffect, useRef} from "react";
import style from "./infoVisit.module.scss";
import {Icons} from "@/img/icons";
import {UserAvatar} from "@/components/sideMenu/userAvatar/userAvatar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {onClose} from "@/redux/infoVisit.ts";



export const InfoVisit: React.FC = () => {
	const name = useSelector((state: RootState) => state.infoVisit.name);
	const phone = useSelector((state: RootState) => state.infoVisit.phone);
	const isClose = useSelector((state: RootState) => state.infoVisit.isClose);
	const infoRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const onClickOverlay = (e: MouseEvent) => {
			if (infoRef.current == null) return ;
			if (overlayRef.current == null) return ;
			if (e.target == overlayRef.current) {
				dispatch(onClose());
			}
		}
		document.addEventListener('click', (e) => { onClickOverlay(e) });
		return () => document.removeEventListener('click', (e) => { onClickOverlay(e) });
	}, []);

	interface Clinic {
		name: string;
		address: string;
	}

	interface TableRow {
		clinic: Clinic;
		date: string;
		smsSent: number;
		smsTransition: number;
		review: number;
		bonuses: number;
	}

	const data: TableRow[] = [
		{
			clinic: { name: 'Армед', address: 'г. Сочи, пер. Бамбуковая 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Стоматология "улыбка"', address: 'г. Сочи, ул. Воровского' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Армед', address: 'г. Сочи, пер. Бамбуковая 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Стоматология "улыбка"', address: 'г. Сочи, ул. Воровского' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Иван Левых', address: '+8(988)184-25-74' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Армед', address: 'г. Сочи, пер. Бамбуковая 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Стоматология "улыбка"', address: 'г. Сочи, ул. Воровского' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Армед', address: 'г. Сочи, пер. Бамбуковая 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Стоматология "улыбка"', address: 'г. Сочи, ул. Воровского' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Екатерининская', address: 'г. Сочи, пер. Рахманинова 44/1' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		},
		{
			clinic: { name: 'Иван Левых', address: '+8(988)184-25-74' },
			date: '14 марта 2025',
			smsSent: 1,
			smsTransition: 1,
			review: 1,
			bonuses: 1
		}
	];

	return <>
		{(isClose) ? <div className={style.Overlay} ref={overlayRef}>
			<div className={style.Info} ref={infoRef}>
				<div className={style.Info__title}>
					<h1>Информация о визитах</h1>
					<button type={'button'} onClick={() => dispatch(onClose())}>
						<Icons.Exit/>
					</button>
				</div>
				<div className={style.Info__pacinet}>
					<UserAvatar symbol={"В"}/>
					<div className={style.Info__pacinet__info}>
						<h5>{ name }</h5>
						<p>{ phone }</p>
					</div>
				</div>

				<div className={style.Info__table}>
					<table>
						<thead>
						<tr>
							<th scope={'column'}>Клиника</th>
							<th scope={'column'}>
								<div className={style.Info__table_date}>
									<p>Дата визита</p>
									<button>
										<Icons.FilterIcon />
									</button>
								</div>
							</th>
							<th scope={'column'}>
								<div className={style.Info__table_date}>
									<p>Отправлено смс</p>
									<button>
										<Icons.FilterIcon />
									</button>
								</div>
							</th>
							<th scope={'column'}>
								<div className={style.Info__table_date}>
									<p>Переход по смс</p>
									<button>
										<Icons.FilterIcon />
									</button>
								</div>
							</th>
							<th scope={'column'}>
								<div className={style.Info__table_date}>
									<p>Отзыв</p>
									<button>
										<Icons.FilterIcon />
									</button>
								</div>
							</th>
							<th scope={'column'}>
								<div className={style.Info__table_date}>
									<p>Бонусы</p>
									<button>
										<Icons.FilterIcon />
									</button>
								</div>
							</th>
						</tr>
						</thead>
						<tbody>
						{ data.map((pacinet) => {
							return <tr className={style.Info__table_line}>
								<th>
									<div className={style.Info__table_name}>
										<h5>{ pacinet.clinic.name }</h5>
										<p>{ pacinet.clinic.address }</p>
									</div>
								</th>
								<th>{ pacinet.date }</th>
								<td>{ pacinet.smsSent }</td>
								<td>{ pacinet.smsTransition }</td>
								<td>{ pacinet.review }</td>
								<td>{ pacinet.bonuses }</td>
							</tr>
						})}
						</tbody>
					</table>
				</div>
			</div>
		</div> : <></>}
	</>
}