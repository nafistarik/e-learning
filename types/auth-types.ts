import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface FormInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: "text" | "email" | "password" | "number";
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
