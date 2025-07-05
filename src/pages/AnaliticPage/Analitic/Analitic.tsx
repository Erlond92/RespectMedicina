import React from "react";
import {useNavigate} from "react-router-dom";
import style from './Analitic.module.scss';
import defaultStyle from "../../defaultStyles.module.scss";
import {SideMenu} from "@/components/sideMenu/sideMenu.tsx";
import {Icons} from "@/img/icons";
import {Calendar} from "@/components/dropDown/calendar/Calendar.tsx";

type Props = {
	id: number,
	name: string,
	address: string,
};

export const Analitic: React.FC<Props> = (props)  => {
	const navigate = useNavigate();

	return (
		<div className={defaultStyle.Page}>
			<SideMenu action={"Analitic"} />
			<div className={style.Analitic}>
				<header>
					<div className={style.Analitic__back}>
						<button
							onClick={() => {
								navigate("/analitic");
							}}
						>
							<Icons.BackIcon />
						</button>
						<div className={style.Analitic__title}>
							<h1>{props.name}</h1>
							<h5>{props.address}</h5>
						</div>
					</div>

					<Calendar/>
				</header>


			</div>
		</div>
	)
};
