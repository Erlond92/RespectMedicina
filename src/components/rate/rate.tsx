import { Icons } from "@/img/icons";
import style from "./rate.module.scss";

type Props = {
  rate: number;
};

export const Rate: React.FC<Props> = (props) => {
  return (
    <div className={style.Rate}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Icons.StarIcon
            key={index}
            fill={index < props.rate ? "#F59700" : "none"}
            stroke={index < props.rate ? "#F59700" : "#D1D1D1"}
          />
        ))}
    </div>
  );
};
