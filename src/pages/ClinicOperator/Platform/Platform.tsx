import style from './Platform.module.scss';
import {CustomRadio} from "@/components/customRadio/CustomRadio.tsx";
import {PlatformLink} from "@/components/link/PlatformLink.tsx";
import {useState} from "react";

type Props = {
	name: string,
	link: string,
}

export const Platform = (props: Props) => {
	const [ value, setValue ] = useState(false);

	const isActive = (isClick: boolean) => {
		if ( isClick ) {
			setValue(!value);
		}
		return value;
	}

	return <div className={`${style.Platform} ${(!value) ? style.Platform_unselect : ''}`}>
		<CustomRadio name={props.name} isActive={isActive}/>
		<PlatformLink link={props.link} isActive={isActive}/>
	</div>
}