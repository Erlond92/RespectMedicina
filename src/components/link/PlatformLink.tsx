import {Icons} from "@/img/icons";
import style from './PlatformLink.module.scss';

type Props = {
	link: string,
	isActive: (isClick: boolean) => boolean,
}

export const PlatformLink  = (props: Props) => {
	return <a  href={props.link} className={`${style.Link} ${(!props.isActive(false)) ? style.Link_select : ''}`}>
		<Icons.LinkIcon/>
	</a>
}