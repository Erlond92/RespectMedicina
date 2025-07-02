import Star from '../../../img/starRate.svg?react';
import style from './rate.module.scss'

type Props = {
	rate: number,
}

export const Rate: React.FC<Props> = (props) => {
	const rate = [<></>, <></>, <></>, <></>, <></>]
	return <div className={style.Rate}>
		{ rate.fill(<Star/>, 0, props.rate ).map((element) => { return element })}
	</div>
};