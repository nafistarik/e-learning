import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller, Control } from "react-hook-form";

interface FormSelectProps {
  name: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; // generic
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

export function FormSelect({
  name,
  label,
  control,
  error,
  options,
  placeholder = "Select an option",
}: FormSelectProps) {
  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={name}>{label}</Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger id={name}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}
