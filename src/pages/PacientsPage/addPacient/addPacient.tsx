import {useRef, useState} from "react";
import { AddButton } from "@/components/button/addButton/addButton";
import { FormPacient } from "@/components/form/FormPacient/FormPacient";

export const AddPacient = () => {
	const [ isClose, setIsClose ] = useState(false);
	const onClose = () => setIsClose(!isClose);
	const ref = useRef<HTMLButtonElement>(null);
	return <>
		<AddButton title={'Добавить пациента'} onClose={onClose}/>
		<FormPacient id={'1'} onClose={onClose} isClose={isClose} buttonRef={ref}/>
	</>;
}