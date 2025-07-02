import {useState} from "react";
import { AddButton } from "@/components/button/addButton/addButton";
import { FormPacient } from "@/components/form/FormPacient/FormPacient";

export const AddPacient = () => {
	const [ isClose, setIsClose ] = useState(false);
	const onClose = () => setIsClose(!isClose);

	return <>
		<AddButton title={'Добавить пациента'} onClose={onClose} />
		<FormPacient id={'1'} onClose={onClose} isClose={isClose}/>
	</>;
}