import React, { useState } from "react";
import { DropDown } from "../dropDown";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store.ts";
import style from "../clinicDropDown/clinicDropDown.module.scss";
import { Icons } from "@/img/icons/index.ts";
import { Checkbox } from "@/components/input/checkbox/checkbox.tsx";

type Props = {
  isPro: boolean,
};

export const OperatorDropDown: React.FC<Props> = () => {
  type Doctor = { name: string; pro: string[] };

  const doctorList = useSelector((state: RootState) => {
    return state.doctorList;
  });
  const selectItem: Doctor[] = [];
  const [selItem, selSelItem] = useState("Выберите оператора");
  const addSelectItem = (e: React.MouseEvent, item: Doctor) => {
    if (!e.target) return;
    if (!(e.target instanceof HTMLInputElement)) return;
    if (e.target.checked) {
      selectItem.push(item);
    } else {
      const index = selectItem.findIndex((element) => element === item);
      selectItem.splice(index, 1);
    }

    if (selectItem.length > 1) {
      selSelItem(`Выбрано ${selectItem.length}`);
    } else {
      if (selectItem.length > 0) {
        selSelItem(selectItem[0].name);
      } else {
        selSelItem("Выберите оператора");
      }
    }
  };

  return (
    <DropDown
      title={"Оператор"}
      selItem={selItem}
      icon={ <Icons.ArrowDrop/> }
    >
      <div className={style.DropDown__Menu}>
        <div className={style.DropDown__menu__header}>
          <input type="text" placeholder={"Поиск..."} />
          <Icons.SeacrhIcon />
        </div>
        <div className={style.DropDown__menu__content}>
          {doctorList.map((doctor, index) => {
            return (
              <div className={style.DropDown__menu__item} key={index}>
                <Checkbox
                  onClick={(e) => {
                    addSelectItem(e, doctor);
                  }}
                />
                <label className={style.DropDown__menu__item__text}>
                  {doctor.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </DropDown>
  );
};
