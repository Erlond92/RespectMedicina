import { Search } from "../../components/input/search/Search";
import { SideMenu } from "../../components/sideMenu/sideMenu";
import defaultStyle from "../defaultStyles.module.scss";
import style from "./ClinicPage.module.scss";
import { AddClinic } from "./addClinic/addClinic";
import { Clinic } from "./clinic/Clinic";
import { useSelector } from "react-redux";
import type {RootState} from "../../redux/store";
import {useParams} from "react-router-dom";
import {PacientPage} from "../PacientsPage/PacientPage";


export const ClinicPage = () => {
  const clinicList = useSelector((state: RootState) => state.clinicList);
  const params = useParams();
  if (params.id != null) return <PacientPage id={Number(params.id)}/>;
  return (
    <div className={defaultStyle.Page}>
      <SideMenu action={'Clinic'} />
      <div className={style.ClinicPage}>
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
            {clinicList.keys().map((clinic) => (
              <Clinic
                id={clinic}
                name={clinicList[clinic].name ?? ''}
                address={clinicList[clinic].address}
              />
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
