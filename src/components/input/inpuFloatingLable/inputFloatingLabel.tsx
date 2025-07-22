import {useEffect, useRef, useState} from "react";
import style from './inputFloatingInput.module.scss';

interface InputProps {
	type: "login" | "password" | 'email' | string;
	value?: string;
	placeholder?: string;
	error?: boolean;
	onInput: (name: string, value: string) => void;
}

export const InputFloatingLabel = (props: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [ value, setValue ] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if ( inputRef.current == null ) return;
		setValue(inputRef.current.value);
	}

	const handleFocus = () => {
		setIsFocused(true)
		console.log('focus');
	}

	const handleInput = () => {
		props.onInput?.(props.type, value);
	};

	const handleClickOutSide = (e: MouseEvent) => {
		if ( inputRef.current == null ) return;
		if ( e.target == null ) return;
		if ( !(e.target instanceof Node) ) return;
		if ( !inputRef.current.contains(e.target) ) {
			setIsFocused(false);
		}
	}

	useEffect(() => {
		window.addEventListener('click', (e: MouseEvent) => handleClickOutSide(e), true);
		return () => {
			window.removeEventListener('click', (e: MouseEvent) => handleClickOutSide(e), true);
		}
	}, []);

	return <div className={`${style.Input} ${isFocused ? style.Input_focused : style.Input_unfocused }`}>
		<input
			name={'input'}
			id={'input'}
			ref={inputRef}
			type="text"
			value={props.value ?? ''}
			onChange={handleChange}
			onInput={handleInput}
			onFocus={handleFocus}
			required
		/>
		<label htmlFor="input" onClick={() => {
			setIsFocused(true);
		}}>{ props.placeholder }</label>
	</div>
}