import style from "./PaginationAction.module.scss";

import { Icons } from "../../../../../img/icons";

export const PaginationAction = () => {
  return (
    <div className={style.Box}>
      <p>Перейти к странице:</p>

      <div className={style.Action}>
        <p>3</p>

        <button type="button" className={style.Button}>
          <Icons.Arrow />
        </button>
      </div>
    </div>
  );
};
