import style from "./review.module.scss";
import { Images } from "@/img/images";

type Props = {
  reviews: ("none" | "pro" | "yandex")[];
};

export const Reviews: React.FC<Props> = (props) => {
  return (
    <div className={style.Bonus}>
      {props.reviews.map((review, index) => {
        return (
          <div className={style.Bonus__Item} key={index}>
            {review == "pro" ? (
              <>
                <img src={Images.ProImage} alt="иконка" />

                <p className={style.Bonus__Item_pro}>Pro</p>
              </>
            ) : (
              <></>
            )}

            {review == "yandex" ? (
              <>
                <img src={Images.YandexImage} alt="иконка яндекса" />

                <p className={style.Bonus__Item_yandex}>Яндекс</p>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};
