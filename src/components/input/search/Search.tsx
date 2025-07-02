import style from "./Search.module.scss";
import { Icons } from "@/img/icons";

export const Search = () => {

  const onClick = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.value == target.defaultValue) {
        target.value = "";
    }
  };

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.value == "") {
      target.value = target.defaultValue;
    }
  };
  return (
    <div className={style.Search}>
      <input
        type="text"
        defaultValue={"Поиск..."}
        onClick={onClick}
        onBlur={onBlur}
      />
      <button>
        <Icons.SeacrhIcon />
      </button>
    </div>
  );
};
