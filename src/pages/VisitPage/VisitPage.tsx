import defaultStyle from "../defaultStyles.module.scss";
import style from "./VisitPage.module.scss";
import { SideMenu } from "@/components/sideMenu/sideMenu.tsx";
import { Search } from "@/components/input/search/Search";
import { useSelector } from "react-redux";
import { PacientTable } from "./PacientTable/PacientTable";
import type { RootState } from "../../redux/store.ts";
import { Sms } from "@/components/sms/Sms";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { PaginationFrom } from "@/components/ui/Pagination/parts/PaginationFrom/PaginationFrom";
import { PaginationAction } from "@/components/ui/Pagination/parts/PaginationAction/PaginationAction";
import { ButtonPrimary } from "@/components/button/primary/ButtonPrimary";
import { AddPacient } from "../PacientsPage/addPacient/addPacient";
import { ClinicDropDown } from "@/components/dropDown/clinicDropDown/clinicDropDown";
import { OperatorDropDown } from "@/components/dropDown/operatoDropDown/operatorDropDown";
import {Calendar} from "@/components/dropDown/calendar/Calendar.tsx";
import {InfoVisit} from "@/components/infoVisit/infoVisit.tsx";

export const VisitPage = () => {
  const pacientList = useSelector((state: RootState) => state.pacientList);

  return (
    <div className={defaultStyle.Page}>
      <SideMenu action={"Visits"} />

      <div className={style.PacientPage}>
        <InfoVisit/>
        <header>
          <h1>Визиты</h1>

          <div className={style.Search}>
            <Search />
            <AddPacient />
          </div>
        </header>

        <div className={style.SelectPanel}>
          <Calendar/>
          <ClinicDropDown isAddress={false} />

          <OperatorDropDown isPro={false} />
        </div>

        <PacientTable type={"Visit"} pacientList={pacientList} />

        <div className={style.Footer}>
          <Sms currentSms={99} />

          <div className={style["Footer-box"]}>
            <div className={style["Pagination-box"]}>
              <Pagination />

              <PaginationFrom />

              <PaginationAction />
            </div>

            <ButtonPrimary
              typeButton="gray"
              className={style.Button}
              text="Показать еще"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
