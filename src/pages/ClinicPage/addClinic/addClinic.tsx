import React from "react";
import {AddButton} from "../../../components/button/addButton/addButton";
import {Form} from "../../../components/form/Form";

export const AddClinic = () => {
    return <>
        <AddButton title={'Добавить клинику'}/>
        <Form title={'addClinic'} />
    </>;
}