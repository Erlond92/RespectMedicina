import Clinic from "../../img/Clinic.svg?react";
import Star from "../../img/Star.svg?react";
import Visit from "../../img/Visit.svg?react";
import Chart from "../../img/Chart.svg?react";
import MEDODS from "../../img/MEDODS.svg?react";
import style from "./sideMenu.module.scss";
import { UserAvatar } from "./userAvatar/userAvatar";

import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div className={style.sideMenu}>
      <Link to="/clinic" className={style.Logo}>
        <img src="/img/Logo.png" alt="logo"  />
      </Link>

      <ul className={style.List}>
        <Link to="/clinic" className={style.List__line}>
          <Clinic />

          <p>Клиники</p>
        </Link>

        <Link to="/reviews" className={style.List__line}>
          <Star />

          <p>Отзывы</p>
        </Link>

        <Link to="/visits" className={style.List__line}>
          <Visit />

          <p>Визиты</p>
        </Link>
      </ul>

      <ul className={style.List}>
        <Link to="/analitic" className={style.List__line}>
          <Chart />

          <p>Аналитика</p>
        </Link>

        <Link to="/medods" className={style.List__line}>
          <MEDODS />

          <p>MEDODS</p>
        </Link>
      </ul>
      
      <div className={style.Users}>
        <UserAvatar symbol={"B"} />
        <p>Морару Валентин</p>
      </div>
    </div>
  );
};
