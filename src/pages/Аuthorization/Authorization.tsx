import { Input } from "@/components/input/Input";
import { ButtonPrimary } from "@/components/button/primary/ButtonPrimary";
import styles from "./Authorization.module.scss";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export const AuthorizationPage = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.login == 'admin' && values.password == 'admin') {
        navigate('/clinic');
       setError(false)
    } else {
       setError(true)
    }
  };

  const changeValues = (name: string, value: string) => {
  
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form className={styles.Window} onSubmit={onSubmit} ref={formRef}>
      <h1>Авторизация</h1>

      <div style={{ width: "100%" }}>
        <div className={styles.Form}>
          <Input
            type={"login"}
            value={values.login}
            onInput={(name: string, value: string) => changeValues(name, value)}
            error={error}
            placeholder="Введите логин"
          />

          <Input
            type={"password"}
            value={values.password}
            onInput={(name: string, value: string) => changeValues(name, value)}
            error={error}
            placeholder="Введите пароль"
          />
        </div>

        {error ? (
          <p className={styles.Error}>Неправильно введен пароль или логин</p>
        ) : null}
      </div>

      <ButtonPrimary type="submit" text="Войти" />
    </form>
  );
};
