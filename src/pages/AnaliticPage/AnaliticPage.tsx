import { Search } from "../../components/input/search/Search";
import { SideMenu } from "../../components/sideMenu/sideMenu";
import defaultStyle from "../defaultStyles.module.scss";
import style from "./AnaliticPage.module.scss";
import { useSelector } from "react-redux";
import type {RootState} from "@/redux/store.ts";
import {AddClinic} from "@/pages/ClinicPage/addClinic/addClinic.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Analitic} from "@/pages/AnaliticPage/Analitic/Analitic.tsx";
import {Icons} from "@/img/icons";


export const AnaliticPage = () => {
	const clinicList = useSelector((state: RootState) => state.clinicList);
	const params = useParams();
	const naviget = useNavigate();

	if (params.id != null) return <Analitic id={Number(params.id)} name={clinicList[Number(params.id)].name} address={clinicList[Number(params.id)].address}/>;
	return (
		<div className={defaultStyle.Page}>
			<SideMenu action={'Analitic'} />
			<div className={style.AnaliticPage}>
				<header>
					<h1>Клиники</h1>
					<div className={style.Search}>
						<Search />
						<AddClinic />
					</div>
				</header>
				<div className={style.Table}>
					<table>
						<thead>
						<tr>
							<th scope="col">
								Клиника
							</th>
							<th scope="col" className={style.Table__arrow}>
							</th>
						</tr>
						</thead>
						<tbody>
						{clinicList.map((clinic) => (
							<tr
								key={clinic.id}
								className={style.Analitic}
								onClick={() => {
									naviget(`/analitic/${clinic.id}`);
								}}
							>
								<th scope="row" className={style.Analitic__name}>
									<h2>{clinic.name}</h2>
									<p>{clinic.address}</p>
								</th>
								<td>
									<Icons.ClinicIcon />
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
