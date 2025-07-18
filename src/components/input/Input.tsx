import styles from "./Input.module.scss";
import { Icons } from "@/img/icons";
import React, { useState } from "react";

export interface InputProps {
  type: "login" | "password" | 'email' | string;
  value: string;
  placeholder?: string;
  error?: boolean;
  onInput?: (name: string, value: string) => void;
 }

export const Input: React.FC<InputProps> = ({value, type, placeholder, error,onInput, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    
    onInput?.(type, target.value);
  };
  return (
    <div
      className={styles.Input}
      style={{
        border: error ? "1px #E30206 solid" : "none",
      }}
    >
      <input
        id={type}
        type={type === "password" && !showPassword ? "password" : (type=='email') ? 'email' : "text"}
        name={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
        {...props}
      />

      {type == "password" ? (
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          type="button"
        >
          {!showPassword ? <Icons.EyeOnIcon /> : <Icons.EyeOffIcon />}
        </button>
      ) : null}
    </div>
  );
};
