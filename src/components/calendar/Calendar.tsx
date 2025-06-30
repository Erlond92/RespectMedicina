import React, { useState, useEffect } from 'react';
import CalendarIcon from '../../img/Calendar.svg?react';
import style from './Calendar.module.scss';

const Calendar: React.FC = () => {
	const [isModal, setIsModal] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
	let date = 'Выберите дату';
	const monthNames = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
	];

	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	const generateYears = () => {
		const years = [];
		for (let year = 1980; year <= 2050; year++) {
			years.push(year);
		}
		return years;
	};

	const years = generateYears();

	const getMonthDays = (year: number, month: number): number => {
		return new Date(year, month + 1, 0).getDate();
	};

	// Получение первого дня месяца
	const getFirstDayOfMonth = (year: number, month: number): number => {
		return new Date(year, month, 1).getDay();
	};

	const toggleCalendar = () => {
		setIsCalendarOpen(!isCalendarOpen);
	};

	const changeMonth = (direction: number) => {
		let newMonth = currentMonth + direction;
		let newYear = currentYear;

		if (newMonth < 0) {
			newMonth = 11;
			newYear--;
		} else if (newMonth > 11) {
			newMonth = 0;
			newYear++;
		}

		setCurrentYear(newYear);
		setCurrentMonth(newMonth);
	};

	const selectYear = (year: number) => {
		setCurrentYear(year);
	};

	const selectDay = (day: number) => {
		const newDate = new Date(currentYear, currentMonth, day);
		setSelectedDate(newDate);
		setIsCalendarOpen(false);
	};
	const formatDateDisplay = (date: Date): string => {
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		return date.toLocaleDateString('ru-RU', options);
	};

	const isToday = (day: number): boolean => {
		const today = new Date();
		return (
			currentYear === today.getFullYear() &&
			currentMonth === today.getMonth() &&
			day === today.getDate()
		);
	};

	const onClickYear = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e.target);
		setCurrentYear(Number(e.target));
	};

	useEffect(() => {

	}, [currentYear, currentMonth]);

	return (
		<>
			<div className={style.Calendar}>
				<p className={style.Calendar__title}>Календарь</p>
				<button type={'button'} className={style.Calendar__button} onClick={() => {
					setIsModal(!isModal)
				}}>
					<p>{date}</p>
					<CalendarIcon/>
				</button>
				{(isModal) ? <div className={style.Modal}>
					<div className={style.years}>
						{years.map((year) => (
							<button className={style.year} onClick={() => {
								setCurrentYear(year)
							}}>
								{year}
							</button>
						))}
					</div>
				</div> : <></> }
			</div>

		</>
	);
};

export default Calendar;