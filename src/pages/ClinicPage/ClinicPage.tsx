import { Search } from "../../components/input/search/Search";
import { SideMenu } from "../../components/sideMenu/sideMenu";
import defaultStyle from "../defaultStyles.module.scss";
import style from "./ClinicPage.module.scss";
import { AddClinic } from "./addClinic/addClinic";
import { Clinic } from "./clinic/Clinic";
import { useSelector } from "react-redux";
import type { RootState } from "../../App.tsx";

export const ClinicPage = () => {
  const clinicList = useSelector((state: RootState) => state.clinicList);

  return (
    <div className={defaultStyle.Page}>
      <SideMenu />
      
      <div className={style.ClinicPage}>
        <header>
          <h1>Клиники</h1>

          <div className={style.Search}>
            <Search />
            <AddClinic />
          </div>
        </header>
        <table className={style.Table}>
          <thead>
            <h2>Клиника</h2>
          </thead>
          <tbody>
            {clinicList.map((clinic) => (
              <Clinic
                id={clinic.id ?? "1"}
                name={clinic.name}
                address={clinic.address}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
