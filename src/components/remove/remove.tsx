import style from "./remove.module.scss";

import { Icons } from "@/img/icons";

type Props = {
  onClick: () => void;
};

export const Remove: React.FC<Props> = (props) => {
  return (
    <button
      className={style.Trash}
      onClick={() => {
        props.onClick();
      }}
    >
      <Icons.RemoveIcon className={style.Icon}/>
    </button>
  );
};
