import { Icons } from '@/img/icons';
import style from './Operator.module.scss';
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {removeOperator} from "@/redux/operatorList.ts";

type Props = {
	id: number,
	name: string,
	email: string,
	changeOperator: () => void,
}

export const Operator = (props: Props) => {
	const [ visible, setVisible ] = useState(false);
	const dispatch = useDispatch();
	const modalRef= useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if ( modalRef.current == null ) return;
			if ( event.target == null ) return;
			if ( !(event.target instanceof Node) ) return;
			if ( !(modalRef.current.contains(event.target)) && !visible ) {
				setVisible(false);
			}
		}

		document.addEventListener('click', (e: MouseEvent) => handleClickOutside(e), true);
		return () => {
			document.removeEventListener('click', (e: MouseEvent) => handleClickOutside(e), true);
		};
	}, []);

	return <div className={style.Operator}>
		<div className={style.Operator__name}>
			<h1>
				{ props.name }
			</h1>
			<p>
				{ props.email }
			</p>
		</div>

		<div className={style.Operator__button}>
			<button type={'button'} onClick={() => setVisible(!visible)}>
				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 12.3542C11 12.6195 11.1054 12.8738 11.2929 13.0614C11.4804 13.2489 11.7348 13.3542 12 13.3542C12.2652 13.3542 12.5196 13.2489 12.7071 13.0614C12.8946 12.8738 13 12.6195 13 12.3542C13 12.089 12.8946 11.8347 12.7071 11.6471C12.5196 11.4596 12.2652 11.3542 12 11.3542C11.7348 11.3542 11.4804 11.4596 11.2929 11.6471C11.1054 11.8347 11 12.089 11 12.3542Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M11 19.3542C11 19.6195 11.1054 19.8738 11.2929 20.0614C11.4804 20.2489 11.7348 20.3542 12 20.3542C12.2652 20.3542 12.5196 20.2489 12.7071 20.0614C12.8946 19.8738 13 19.6195 13 19.3542C13 19.089 12.8946 18.8347 12.7071 18.6471C12.5196 18.4596 12.2652 18.3542 12 18.3542C11.7348 18.3542 11.4804 18.4596 11.2929 18.6471C11.1054 18.8347 11 19.089 11 19.3542Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M11 5.35425C11 5.61946 11.1054 5.87382 11.2929 6.06135C11.4804 6.24889 11.7348 6.35425 12 6.35425C12.2652 6.35425 12.5196 6.24889 12.7071 6.06135C12.8946 5.87382 13 5.61946 13 5.35425C13 5.08903 12.8946 4.83468 12.7071 4.64714C12.5196 4.45961 12.2652 4.35425 12 4.35425C11.7348 4.35425 11.4804 4.45961 11.2929 4.64714C11.1054 4.83468 11 5.08903 11 5.35425Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			{ (visible) ?
				<div className={style.DropDown} ref={modalRef}>
					<button type={'button'} onClick={props.changeOperator}>
						<Icons.Change/>
						Редактировать
					</button>
					<button type={'button'} onClick={() => dispatch(removeOperator({name: props.name, email: props.email, id: props.id}))}>
						<Icons.Trash/>
						Удалить
					</button>
				</div> : <></> }
		</div>
	</div>
}