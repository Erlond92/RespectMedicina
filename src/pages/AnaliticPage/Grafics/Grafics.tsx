import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import style from './Grafics.module.scss';

type Props = {
	title: string;
	data: {
		name: string,
		prodDoktorov: number,
		sberZdorovie: number,
		twoGis: number
		yandexKart: number,
	}[],
}

export const Grafics: React.FC<Props> = (props) => {
	const range = (start: number, end: number) => Array.from({length: (end - start)}, (_v: number, k) => k + start);

	const CustomTooltip = ({ active, payload, label } : {
		active: any;
		payload: any;
		label?: any;
	}) => {
		const isVisible = active && payload && payload.length;
		return (
			<div className={style.CustomToolKit} style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
				{isVisible && (
					<>
						<h5 className={style.CustomToolKit_title}>{ props.data[label-1].name }</h5>
						<div className={style.CustomToolKit__Content}>
							<span className={style.CustomToolKit__Content}>
								<div className={style.CustomToolKit__Content__item}>
									<div className={style.CustomToolKit__Name}>
										<span className={style.CustomToolKit_radio} style={{ backgroundColor: '#117DC1' }}></span>
										<p className={style.CustomToolKit_name}>
											ПроДокторов
										</p>
									</div>
									<p className={style.CustomToolKit_count}>
										{  props.data[label-1].prodDoktorov }
									</p>
								</div>
								<div className={style.CustomToolKit__Content__item}>
									<div className={style.CustomToolKit__Name}>
										<span className={style.CustomToolKit_radio} style={{ backgroundColor: '#FF0D65' }}></span>
										<p className={style.CustomToolKit_name}>
											СберЗдоровье
										</p>
									</div>
									<p className={style.CustomToolKit_count}>
										{  props.data[label-1].sberZdorovie }
									</p>
								</div>
								<div className={style.CustomToolKit__Content__item}>
									<div className={style.CustomToolKit__Name}>
										<span className={style.CustomToolKit_radio} style={{ backgroundColor: '#FF4230' }}></span>
										<p className={style.CustomToolKit_name}>
											Яндекс Карты
										</p>
									</div>
									<p className={style.CustomToolKit_count}>
										{  props.data[label-1].yandexKart }
									</p>
								</div>
								<div className={style.CustomToolKit__Content__item}>
									<div className={style.CustomToolKit__Name}>
										<span className={style.CustomToolKit_radio} style={{ backgroundColor: '#FFB919' }}></span>
										<p className={style.CustomToolKit_name}>
											2гис
										</p>
									</div>
									<p className={style.CustomToolKit_count}>
										{  props.data[label-1].twoGis }
									</p>
								</div>
							</span>
						</div>
					</>
				)}
			</div>
		);
	};


	return <div className={style.Grafics}>
		<h1 className={style.Grafics__title}>
			{ props.title }
		</h1>
		<div style={{ width: '100%' }}>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={props.data}>
					<CartesianGrid vertical={false} stroke="#aaa" strokeDasharray="5 5" />
					<XAxis ticks={range(1, props.data.length)}/>
					{(props.title == 'Рейтинг') ? <YAxis domain={[0, 5]} ticks={[0.0, 1.0, 2.0, 3.0, 4.0, 5.0]} width={58}/> : <YAxis width={58}/>}
					<Tooltip content={CustomTooltip} />
					<Line type="monotone" dataKey="prodDoktorov" strokeWidth={2} stroke="#5470C6" name="ПродДокторов" />
					<Line type="monotone" dataKey="sberZdorovie" strokeWidth={2} stroke="#91CC75" name="СберЗдоровье" />
					<Line type="monotone" dataKey="yandexKart" strokeWidth={2} stroke="#FAC858" name="Яндекс Карты" />
					<Line type="monotone" dataKey="2gis" strokeWidth={2} stroke="#EE6666" name="2гис" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	</div>;
}