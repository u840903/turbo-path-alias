import { BaseInput } from "#depsprimitive/base-input";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = (props: InputProps) => {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <BaseInput id={name} {...rest} />
    </div>
  );
};
