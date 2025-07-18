import React from "react";
import style from './ClinicTitle.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store.ts";
import {UserAvatar} from "@/components/sideMenu/userAvatar/userAvatar.tsx";

type Props = {
	clinicId: number,
}

export const ClinicTitle: React.FC<Props> = (props) => {
	const clinicInfo = useSelector((state: RootState) => state.clinicList.filter((element) => element.id == props.clinicId)[0]);
	return <div className={style.Title}>
		<UserAvatar symbol={clinicInfo.name[0]}/>
		<div className={style.Title__Name}>
			<h1>
				{ `${clinicInfo.type} "${clinicInfo.name}"` }
			</h1>
			<div className={style.Title__Name_address}>
				<span>
				{ clinicInfo.type }
			</span>
				<span>
				{ clinicInfo.address }
			</span>
			</div>
		</div>
	</div>
}