import FilterIcon from '../../../img/Filter.svg?react';
import {useSelector} from "react-redux";
import type {RootState} from "../../../redux/store";
import {Rate} from "../../../components/ui/rate/rate";
import style from "./ReviewTable.module.scss";
import React from "react";
import {Reviews} from "../../../components/ui/review/review";
import {Bonus} from "../../../components/ui/bonus/bonus";
import {MessageBubble} from "../../../components/ui/message/message";
import {Remove} from "../../../components/ui/remove/remove";

export const ReviewTable = () => {
	const reviewList = useSelector((state: RootState) => state.reviewList);

	return (<div className={style.Table}>
		<table>
			<thead>
				<tr>
					<th>
						Пациент
					</th>
					<th>
						<div className={style.Table__date}>
							<p>
								Дата визита
							</p>
							<button>
								<FilterIcon/>
							</button>
						</div>
					</th>
					<th>
						<div className={style.Table__rate}>
							<p>
								Рейтинг
							</p>
							<button>
								<FilterIcon/>
							</button>
						</div>
					</th>
					<th>Бонусы</th>
					<th>Отзыв</th>
					<th>Смс</th>
					<th>
						<div className={style.Table__date}>
							<p>
								Дата отзыва
							</p>
							<button>
								<FilterIcon/>
							</button>
						</div>
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{ reviewList.map((review) => {
					return (<tr>
						<td>
							<div className={style.Table__pacient}>
								<h2>{review.name}</h2>
								<h5>{review.phone}</h5>
							</div>
						</td>
						<td className={style.Table__date}>
							{review.date_visit}
						</td>
						<td className={style.Table__rate}><Rate rate={review.rate}/></td>
						<td><Bonus isBonus={review.bonus}/></td>
						<td><Reviews reviews={review.reviews}/></td>
						<td>
							<MessageBubble n={review.sms}/>
						</td>
						<td className={style.Table__date}>
							{review.date_review}
						</td>
						<td>
							<Remove onClick={() => {}}/>
						</td>
					</tr>);
				}) }
			</tbody>
		</table>
	</div>);
}