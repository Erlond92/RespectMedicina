import { Icons } from "@/img/icons";

import classNames from "classnames";

import style from "./Pagination.module.scss";

export const Pagination = () => {
  return (
    <div className={style.box}>
      <button
        className={style.Arrow}
        type="button"
        style={{ rotate: "-180deg" }}
      >
        <Icons.Arrow />
      </button>

      <ul className={style.List}>
        <li className={classNames(style["active-link"], style.Link)}>1</li>

        <li className={style.Link}>2</li>

        <li className={style.Link}>3</li>

        <li className={style.Link}>4</li>

        <li className={style.Link}>5</li>

        <li className={style.Link}>6</li>

        <li className={style.Link}>...</li>

        <li className={style.Link}>99</li>
      </ul>

      <button className={style.Arrow} type="button">
        <Icons.Arrow />
      </button>
    </div>
  );
};
