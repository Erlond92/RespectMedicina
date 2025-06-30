import style from './checkbox.module.scss';

export const Checkbox = () => {
	return <label className={style.customCheckbox}>
		<input type={"checkbox"}/>
		<span className={style.checkmark}></span>
	</label>;
}