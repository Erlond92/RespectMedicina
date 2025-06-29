import defaultStyle from '../defaultStyles.module.scss';
import style from './VisitPage.module.scss';
import {SideMenu} from "../../components/sideMenu/sideMenu";
import {Search} from "../../components/input/search/Search";
import {AddPacient} from "./addPacient/addPacient";
import {useSelector} from "react-redux";
import type {RootState} from "../../App";
import {Pacient} from "./Pacient/Pacient";

export const VisitPage = () => {

    const pacientList = useSelector((state: RootState) => state.pacientList);

    return (
        <div className={defaultStyle.Page}>
            <SideMenu/>
            <div className={style.PacientPage}>
                <header>
                    <h1>Визиты</h1>
                    <div className={style.Search}>
                        <Search/>
                        <AddPacient/>
                    </div>
                </header>
                <table className={style.Table}>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>Пациент</th>
                            <th>Доктор</th>
                            <th>Комментарий</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientList.map((pacient) => (
                            <Pacient name={pacient.name} phone={pacient.phone} doctor={pacient.doctor} doctor_pro={pacient.doctor_pro} comm={pacient.comm}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};