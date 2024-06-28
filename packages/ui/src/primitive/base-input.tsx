import { InputHTMLAttributes } from "react";

export const BaseInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};
