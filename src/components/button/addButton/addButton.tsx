import {JSX} from "react";
import Plus from "../../../img/Plus.svg?react";
import style from './addButton.module.scss';
import {useDispatch} from "react-redux";
import {isClinic, isPacient} from "../../../redux/toggle";

type Props = {
  title: 'addClinic' | 'addPacient' | string;
  children? : JSX.Element;
}

export const AddButton: React.FC<Props> = (props) => {
  const distpatch = useDispatch();
  switch (props.title) {
    case 'addClinic':
      return (<>
        <button className={style.AddClinic} onClick={() => { distpatch(isClinic()) }}>
          <Plus />
          Добавить клинику
        </button>
      </>);
      break;
    case 'addPacient':
      return (<>
        <button className={style.AddClinic} onClick={() => { distpatch(isPacient()) }}>
          <Plus />
          Добавить пациента
        </button>
      </>);
      break;
    default: return props.children;
  }
};
