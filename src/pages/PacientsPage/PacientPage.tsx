import defaultStyle from "../defaultStyles.module.scss";
import { SideMenu } from "@/components/sideMenu/sideMenu";
import style from "./Pacient.module.scss";
import { Search } from "@/components/input/search/Search";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Icons } from "@/img/icons";
import { useNavigate } from "react-router-dom";
import { PacientTable } from "../VisitPage/PacientTable/PacientTable";
import { Sms } from "@/components/sms/Sms";
import { AddPacient } from "./addPacient/addPacient";

type Props = {
  id: number;
};

export const PacientPage: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const clinic = useSelector((state: RootState) => state.clinicList[props.id]);
  const pacientList = useSelector((state: RootState) => state.pacientList);

  return (
    <div className={defaultStyle.Page}>
      <SideMenu action={"Clinic"} />
      <div className={style.PacientPage}>
        <header>
          <div className={style.PacientPage__back}>
            <button
              onClick={() => {
                navigate("/clinic");
              }}
            >
              <Icons.BackIcon />
            </button>
            <div className={style.PacientPage__title}>
              <h1>{clinic!.name}</h1>
              <h5>{clinic!.address}</h5>
            </div>
          </div>
          <div className={style.Search}>
            <Search />
            <AddPacient />
          </div>
        </header>
        <PacientTable type={"Clinic"} pacientList={pacientList} />

        <div className={style.Footer}>
          <Sms currentSms={101} />
        </div>
      </div>
    </div>
  );
};
