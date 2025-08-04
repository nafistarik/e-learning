import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  register: ReturnType<typeof import("react-hook-form")["useForm"]>["register"];
  error?: string;
}

export function FormTextarea({
  label,
  name,
  register,
  error,
  className,
  ...rest
}: FormTextareaProps) {
  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        {...register(name)}
        {...rest}
        className={`${error ? "border-red-500" : ""} ${className}`}
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}
