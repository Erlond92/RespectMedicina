import Plus from "../../../img/Plus.svg?react";
import style from "./addPacient.module.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clinicList } from "../../redux";

export const AddPacient = () => {
  const [AddMenu, setAddMenu] = useState(false);
  const distpach = useDispatch();
  
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

  const menuCancel = () => {
    setAddMenu(false);
  };

  const addClinic = (e: React.FormEvent) => {
    e.preventDefault();

    const form = (e.target as HTMLFormElement).form;
    const formData = Object.fromEntries(new FormData(form));
    distpach(
      clinicList.actions.addClinic({
        id: Date.now().toString(),
        name: typeof formData.name == "string" ? formData.name : "",
        address:
          typeof formData.address == "string" &&
          typeof formData.city == "string"
            ? `${formData.city}, ${formData.address}`
            : "",
      })
    );
    setAddMenu(false);
  };

  return (
    <>
      {AddMenu ? (
        <form className={style.Overlay} id="Form">
          <div className={style.Form}>
            <h1>Добавить пациента</h1>

            <div className={style.Inputs}>
              <input
                name="name"
                type="text"
                placeholder="ФИО"
                onClick={onClick}
                onBlur={onBlur}
              />
              <input
                name="phoneNumber"
                type="text"
                placeholder="Телефон"
                onClick={onClick}
                onBlur={onBlur}
              />
              <input
                name="doctor"
                type="text"
                placeholder="Доктор"
                onClick={onClick}
                onBlur={onBlur}
              />
              <input
                name="comm"
                type="text"
                placeholder="Комментарий"
                onClick={onClick}
                onBlur={onBlur}
              />
            </div>

            <div className={style.Form__buttons}>
                <button
                  type="button"
                  onClick={() => menuCancel()}
                  className={style.Form__buttons__cancel}
                >
                  Отмена
                </button>
                <button
                  type="button"
                  onClick={(e) => addClinic(e)}
                  className={style.Form__buttons__add}
                >
                  Добавить
                </button>
              </div>
          </div>
        </form>
      ) : (
        <></>
      )}
      <button
        className={style.Button}
        onClick={() => {
          setAddMenu(true);
        }}
      >
        <Plus />
        <p>Добавить пациента</p>
      </button>
    </>
  );
};
