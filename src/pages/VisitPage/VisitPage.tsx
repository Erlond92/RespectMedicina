import defaultStyle from '../defaultStyles.module.scss';
import style from './VisitPage.module.scss';
import {SideMenu} from "../../components/sideMenu/sideMenu";
import {Search} from "../../components/input/search/Search";
import {AddPacient} from "./addPacient/addPacient";
import {useSelector} from "react-redux";
import {PacientTable} from "./PacientTable/PacientTable";
import type {RootState} from "../../redux/store.ts";
import {Sms} from "../../components/sms/Sms";
import Calendar from "../../components/calendar/Calendar";

export const VisitPage = () => {

	const pacientList = useSelector((state: RootState) => state.pacientList);

	return (
		<div className={defaultStyle.Page}>
			<SideMenu action={'Visits'}/>
			<div className={style.PacientPage}>
				<header>
					<h1>Визиты</h1>
					<div className={style.Search}>
						<Search/>
						<AddPacient/>
					</div>
				</header>
				<div className={style.SelectPanel}>
				</div>
				<PacientTable type={'Visit'} pacientList={pacientList}/>
				<Sms currentSms={99}/>
			</div>
		</div>
	);
};