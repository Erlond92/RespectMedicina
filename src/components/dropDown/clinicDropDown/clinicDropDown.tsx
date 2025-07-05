import React, { useState } from "react";
import { DropDown } from "../dropDown.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store.ts";
import style from "./clinicDropDown.module.scss";
import { Icons } from "@/img/icons/index.ts";
import { Checkbox } from "@/components/input/checkbox/checkbox.tsx";

type Props = {
  isAddress: boolean;
};

export const ClinicDropDown: React.FC<Props> = () => {
  type Clinic = { name: string; address: string };

  const clinicList = useSelector((state: RootState) => {
    return state.clinicList;
  });
  const selectItem: Clinic[] = [];
  const [selItem, selSelItem] = useState("Выберите клинику");
  const addSelectItem = (e: React.MouseEvent, item: Clinic) => {
    if (!e.target) return;
    if (!(e.target instanceof HTMLInputElement)) return;
    if (e.target.checked) {
      selectItem.push(item);
    } else {
      const index = selectItem.findIndex((element) => element === item);

      selectItem.slice(index, 1);
    }

    if (selectItem.length > 1) {
      selSelItem(`Выбрано ${selectItem.length}`);
    } else {
      if (selectItem.length > 0) {
        selSelItem(selectItem[0].name);
      } else {
        selSelItem("Выберите клинику");
      }
    }
  };

  return (
    <DropDown
      title={"Клиники"}
      selItem={selItem}
      icon={ <Icons.ArrowDrop/> }
    >
      <div className={style.DropDown__Menu}>
        <div className={style.DropDown__menu__header}>
          <input type="text" placeholder={"Поиск..."} />
          <Icons.SeacrhIcon />
        </div>
        <div className={style.DropDown__menu__content}>
          {clinicList.map((clinic) => {
            return (
              <div className={style.DropDown__menu__item} key={clinic.id}>
                <Checkbox
                  onClick={(e) => {
                    addSelectItem(e, clinic);
                  }}
                />
                <label className={style.DropDown__menu__item__text}>
                  {clinic.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </DropDown>
  );
};
