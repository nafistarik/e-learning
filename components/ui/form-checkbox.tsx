import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Control, Controller } from "react-hook-form";

interface FormCheckboxProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  error?: string;
}

export function FormCheckbox({
  label,
  name,
  control,
  error,
}: FormCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      <Label htmlFor={name}>{label}</Label>
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}
