import style from './backButton.module.scss';
import {Icons} from "@/img/icons";
import {Link} from "react-router-dom";

type Props = {
	returnPath: string,
}

export const BackButton: React.FC<Props> = (props) => {
	return <Link className={style.Button} to={props.returnPath}>
		<Icons.BackButtonIcon/>
		Назад
	</Link>
}