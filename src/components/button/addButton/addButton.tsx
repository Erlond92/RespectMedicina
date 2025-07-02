import { Icons } from "@/img/icons";
import style from "./addButton.module.scss";

type Props = {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
};

export const AddButton: React.FC<Props> = ({ title, onClose }) => {
  return (
    <button
      className={style.AddClinic}
      onClick={() => {
        onClose();
      }}
    >
      <Icons.PlusIcon />
      {title}
    </button>
  );
};
