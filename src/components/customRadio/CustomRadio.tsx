import style from './CustomRadio.module.scss';

type Props = {
	name: string,
	isActive: (isCLick: boolean) => boolean,
}

export const CustomRadio = (props: Props) => {
	return <div className={style.Radio} onClick={() => {
		props.isActive(true)
		return ;
	}}>
		<div className={(props.isActive(false) ? style.Radio__select : style.Radio__unselect)}>
			<span></span>
		</div>
		<p>{ props.name }</p>
	</div>
}