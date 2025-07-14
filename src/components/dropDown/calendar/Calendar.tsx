import React, {RefObject, useEffect, useMemo, useRef, useState} from 'react';
import {Icons} from "@/img/icons";
import style from './Calendar.module.scss';
import {DropDown} from "@/components/dropDown/dropDown.tsx";

export const Calendar: React.FC = () => {
	const [ dateString, setDateString ] = useState('Выберите дату');
	const [ date, setDate ] = useState({
		year: 3000,
		date: [{
			month: 99,
			day: 99,
		}]
	});

	useEffect(() => {
		if (date.year == 3000) {
			setDateString('Выберите дату');
		} else {
			if ( date.date.length == 1) {
				setDateString(toDate(date.date[0].day, date.date[0].month, date.year));
			}
			if ( date.date.length == 2) {
				setDateString(toCalendar(date.year, [{month: date.date[0].month, day: date.date[0].day}, {month: date.date[1].month, day: date.date[1].day}]));
			}
		}
	}, [date.date]);

	const checkedDate = (date: number) => {
		return (date < 10) ? `0${date}` : date.toString();
	}

	const toDate = (day: number, month: number, year: number) => {
		return `${checkedDate(day)}.${checkedDate(month)}.${checkedDate(year)}`;
	}

	const toCalendar = (year: number, dates: [{month: number, day: number}, {month: number, day: number}]) => {
		if (dates[0].month <= dates[1].month) {
			if (dates[0].day < dates[1].day) {
				return `${toDate(dates[0].day, dates[0].month, year)} - ${toDate(dates[1].day, dates[1].month, year)}`;
			} else {
				return `${toDate(dates[1].day, dates[1].month, year)} - ${toDate(dates[0].day, dates[0].month, year)}`;
			}
		} else {
			return `${toDate(dates[1].day, dates[1].month, year)} - ${toDate(dates[0].day, dates[0].month, year)}`;
		}
	};

	const listYears = useMemo(() => {
		const years = [];
		for (let i = 1900; i <= 2030; i++) {
			years.push(i);
		}
		return years;
	}, []);
	const listMonth = ['Дек', 'Ноя', 'Окт', 'Сен', 'Авг', 'Июл', 'Июн', 'Май', 'Апр', 'Мар', 'Фев', 'Янв'];

	const getMonthDays = (year: number, month: number)=>  {
		const daysInMonth = new Date(year, month, 0).getDate(); // Количество дней в месяце
		const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
		const result = [];

		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day); // Месяцы в JS нумеруются с 0 (июль = 6)
			const dayName = daysOfWeek[date.getDay()];
			result.push([day, dayName]);
		}
		return result;
	}

	const getDayOfYear = (year: number, month: number, day: number)=>  {
		const date = new Date(year, month, day);
		const startYear = new Date(year, 0, 1);
		return Math.floor((Number(date) - Number(startYear)) / (1000 * 60 * 60 * 24));
	}

	const yearRefs: RefObject<HTMLButtonElement[]> = useRef([]);
	const monthRefs: RefObject<HTMLButtonElement[]> = useRef([]);
	const monthTableRefs: RefObject<HTMLTableDataCellElement[] | HTMLTableRowElement[]> = useRef([]);
	const dayRefs: RefObject<HTMLButtonElement[]> = useRef([]);

	const onCLickYear = (e: React.MouseEvent, year: number) => {
		 if ( e.target instanceof HTMLButtonElement) {
			 for (let i = 0; i<yearRefs.current.length; i++) {
				 yearRefs.current[i].className = style.Calendar__years_noselect
			 }
			 e.target.className = style.Calendar__years_select;
		 }
		 setDate({
			 year: year,
			 date: date.date,
		 });
	};

	const onClickMonth = (e: React.MouseEvent, month: string) => {
		if ( e.target instanceof HTMLButtonElement) {
			for (let i = 0; i< monthRefs.current.length; i++) {
				monthRefs.current[i].className = style.Calendar__years_noselect;
			}
			e.target.className = style.Calendar__years_select;
			monthTableRefs.current[listMonth.indexOf(month)].scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	};

	const onClickDay = (e: React.MouseEvent, day: string, month: string) => {
		const l = dayRefs.current.filter((element: HTMLButtonElement) => element.className.includes(style.Calendar__table_select)).length;
		if ( e.target instanceof HTMLButtonElement) {
			if (e.target.className.includes(style.Calendar__table_select)) return ;
			if ( l == 2 && !(e.target.className.includes(style.Calendar__table_select))) {
				for (let i=0; i<dayRefs.current.length; i++) {
					dayRefs.current[i].className = `${style.Calendar__table_unselect} ${style.Calendar__table_button}`;
				}
				e.target.className = `${style.Calendar__table_select} ${style.Calendar__table_button}`;
				setDate({
					year: date.year,
					date: [{
						month: listMonth.indexOf(month),
						day: Number(day),
					}]
				});
			} if ( 1 >= l) {
				e.target.className = `${style.Calendar__table_select} ${style.Calendar__table_button}`;
				if (date.date[0].day == 99 && date.date[0].month == 99) {
					setDate({
						year: date.year,
						date: [{
							month: listMonth.indexOf(month),
							day: Number(day),
						}]
					});
				} else {
					setDate({
						year: date.year,
						date: [date.date[0], {
							month: listMonth.indexOf(month),
							day: Number(day),
						}]
					});
				}
			}
		}
	}

	return (<div className={style.Calendar}>
		<DropDown
			title={'Календарь'}
			icon={ <Icons.CakendarIcon/> }
			selItem={dateString}
		>
			<div className={style.Calendar__content}>
				<div className={style.Calendar__years}>
					{ listYears.map( (year) => {
						const i = listYears.indexOf(year);
						return <button ref={(e) => {
							if (e == null) return ;
							yearRefs.current[i] = e;
						}} className={style.Calendar__years_noselect} key={year} onClick={(e) => onCLickYear(e, year)} > { year } </button>
					})}
				</div>
				<div className={style.Calendar__month}>
					{ listMonth.map( (month) => {
						const i = listMonth.indexOf(month);
						return <button ref={(e) => {
							if (e == null) return ;
							monthRefs.current[i] = e;
						}} className={style.Calendar__years_noselect} key={month} onClick={(e) => onClickMonth(e, month)}> { month } </button>
					})}
				</div>
				<div className={style.Calendar__table}>
					<table>
						<thead>
							<tr>
								<th scope={'column'}>Пн</th>
								<th scope={'column'}>Вт</th>
								<th scope={'column'}>Ср</th>
								<th scope={'column'}>Чт</th>
								<th scope={'column'}>Пт</th>
								<th scope={'column'}>Сб</th>
								<th scope={'column'}>Вс</th>
							</tr>
						</thead>
						<tbody>
							{ listMonth.map((element) => {
								const days = getMonthDays(date.year, listMonth.indexOf(element)+1);
								const calendar: string[][] = [];
								if ( days[0][1] != 1) {
									for (let i=days[0][1]-1; i>=1; i--) {
										days.unshift([-1, i]);
									}
								}
								if ( days[days.length-1][1] != 7) {
									for (let i=days[days.length-1][1]+1; i<=7; i++) {
										days.push([-1, i]);
									}
								}
								for (let i=0; i<days.length; i++) {
									const day = (days[i][0] == -1) ? '' : days[i][0].toString();
									if ( days[i][1] == 1 ) {
										calendar.push([day]);
									} else {
										calendar[Math.floor(i/7)].push(day);
									}
								}
								return <>
									<tr className={style.Calendar__table_title}><td ref={(e) => {
										if (e == null) return ;
										monthTableRefs.current[listMonth.indexOf(element)] = e
									}} colSpan={7} >{ element }</td></tr>
									{ calendar.map((week) => {
										return <tr ref={(e) => {
											if (e == null) return ;
											monthTableRefs.current[listMonth.indexOf(element)] = e;
										}} className={style.Calendar__table_day} key={calendar.indexOf(week)} >
											{ week.map((day) => {return <td scope="row">
												{
													(day != '') ?
												<button ref={(e) => {
													if (!(e)) return ;
													dayRefs.current[getDayOfYear(date.year, listMonth.indexOf(element), Number(day))] = e;
												}} onClick={(e) => {onClickDay(e, day, element)}} type={'button'} className={`${style.Calendar__table_button} ${style.Calendar__table_unselect}`}>
													{ day }
												</button> : '' }
											</td> })
											}
										</tr>
									}) }
								</>
							}) }
						</tbody>
					</table>
				</div>
			</div>
			<div></div>
			<div></div>
		</DropDown>
	</div>);
}