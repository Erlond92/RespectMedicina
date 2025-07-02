import React, {useState} from "react";
import {AddButton} from "../../../components/button/addButton/addButton";
import {FormClinic} from "../../../components/form/FormClinic/FormClinic";

export const AddClinic = () => {
    const [ isClose, setIsClose ] = useState(false);
    const onClose = () => {
        setIsClose(!isClose);
    };

    return <>
        <AddButton title={'Добавить клинику'} onClose={onClose} />
        <FormClinic isClose={isClose} onClose={onClose}/>
    </>;
}