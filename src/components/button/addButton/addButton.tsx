import {JSX} from "react";
import Plus from "../../../img/Plus.svg?react";
import style from "./addButton.module.scss";
import {useDispatch} from "react-redux";

type Props = {
    title: string,
    children?: JSX.Element,
    onClose: () => void
};

export const AddButton: React.FC<Props> = ({title, onClose}) => {
    const distpatch = useDispatch();

    return (
        <button
            className={style.AddClinic}
            onClick={() => { onClose() }}
        >
            <Plus/>
            {title}
        </button>
    );
};
