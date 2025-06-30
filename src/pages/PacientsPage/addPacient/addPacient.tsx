import React from "react";
import {AddButton} from "../../../components/button/addButton/addButton";
import {Form} from "../../../components/form/Form";

export const AddPacient = () => {
	return <>
		<AddButton title={'addPacient'} />
		<Form title={'addPacient'} />
	</>;
}