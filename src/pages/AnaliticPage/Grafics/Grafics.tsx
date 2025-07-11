import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import style from './Grafics.module.scss';

type Props = {
	title: string;
	data: {
		name: string,
		prodDoktorov: number,
		sberZdorovie: number,
		twoGis: number
	}[],
}

export const Grafics: React.FC<Props> = (props) => {
	const range = (start: number, end: number) => Array.from({length: (end - start)}, (_v: number, k) => k + start);
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
					<Tooltip />
					<Line type="monotone" dataKey="prodDoktorov" strokeWidth={2} stroke="#5470C6" name="ПродДокторов" />
					<Line type="monotone" dataKey="sberZdorovie" strokeWidth={2} stroke="#91CC75" name="СберЗдоровье" />
					<Line type="monotone" dataKey="yandexKart" strokeWidth={2} stroke="#FAC858" name="Яндекс Карты" />
					<Line type="monotone" dataKey="2gis" strokeWidth={2} stroke="#EE6666" name="2гис" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	</div>;
}