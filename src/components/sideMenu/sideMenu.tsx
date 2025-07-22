import { Icons } from "@/img/icons";
import style from "./sideMenu.module.scss";
import { UserAvatar } from "./userAvatar/userAvatar";
import { Link } from "react-router-dom";
import { Images } from "@/img/images";

type Props = {
  action: 'Clinic' | 'Reviews' | 'Visits' | 'Analitic';
}

export const SideMenu: React.FC<Props> = (props) => {
  return (
    <div className={style.sideMenu}>
      <Link to="/clinic" className={style.Logo}>
        <img src="/img/Logo.png" alt="logo"  />
      </Link>
      <ul className={style.List}>
        <Link to="/clinic" className={( props.action == 'Clinic' ) ? style.List__line_action :style.List__line }>
          <Icons.Clinic />
          <p>Клиники</p>
        </Link>
        <Link to="/reviews" className={( props.action == 'Reviews' ) ? style.List__line_action :style.List__line}>
          <Icons.StarIcon />
          <p>Отзывы</p>
        </Link>
        <Link to="/visits" className={( props.action == 'Visits' ) ? style.List__line_action :style.List__line}>
          <Icons.VisitIcon />
          <p>Визиты</p>
        </Link>
      </ul>
      <ul className={style.List}>
        <Link to="/analitic" className={( props.action == 'Analitic' ) ? style.List__line_action :style.List__line}>
          <Icons.ChartIcon />
          <p>Аналитика</p>
        </Link>
        <span className={style.List__line}>
          <img src={Images.MeddosImage} alt="иконка" />
          <p>MEDODS</p>
        </span>
      </ul>
      <div className={style.Users}>
        <UserAvatar symbol={"B"} />
        <p>Морару Валентин</p>
      </div>
    </div>
  );
};
