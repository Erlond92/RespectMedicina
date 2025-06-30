import React from "react";
import {FormClinic} from "./FormClinic/FormClinic";
import {FormPacient} from "./FormPacient/FormPacient";

type Props = {
  title: string,
  idClinic?: string,
}

export const Form: React.FC<Props> = (props) => {
  if (props.title == 'addClinic') {
    <FormClinic/>
  }
  if (props.title == 'addPacient') {
    <FormPacient id={props.idClinic ?? '1'}/>
  } else {
    return null ;
  }
}
