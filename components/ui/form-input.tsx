import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { Path, FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: "text" | "email" | "password" | "number";
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
  className,
  ...rest
}: FormInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={name} className="text-sm font-medium text-muted-foreground">
        {label}
      </Label>

      <div className="relative">
        <Input
          id={name}
          type={isPassword && showPassword ? "text" : type}
          className={`pr-10 ${error ? "border-red-500" : ""} ${className}`}
          {...register(name)}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500 font-medium mt-1">{error}</p>
      )}
    </div>
  );
}
