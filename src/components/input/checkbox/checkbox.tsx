import style from './checkbox.module.scss';
import React from "react";

type Props = {
	onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

interface CheckboxProps {
	onClick?: () => void
}

export const Checkbox: React.FC<Props> = (props) => {
	return <>
		<input className={style.customCheckbox} type={"checkbox"} onClick={(e) => props.onClick(e)}/>
	</>

}