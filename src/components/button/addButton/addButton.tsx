import { Icons } from "@/img/icons";
import style from "./addButton.module.scss";

type Props = {
  title: string;
  onClose: () => void;
	width?: number,
};

export const AddButton: React.FC<Props> = (props) => {
  return (
    <button
      className={style.AddClinic}
      onClick={() => {
        props.onClose();
      }}
			style={{width: (props.width != null) ? props.width : 'auto' }}
    >
      <Icons.PlusIcon />
      {props.title}
    </button>
  );
};
