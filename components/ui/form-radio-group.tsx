import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control, Controller } from "react-hook-form";

interface FormRadioGroupProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  options: { label: string; value: string }[];
  error?: string;
}

export function FormRadioGroup({
  label,
  name,
  control,
  options,
  error,
}: FormRadioGroupProps) {
  return (
    <div className="space-y-2">
      <Label className="block">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            defaultValue={field.value}
            onValueChange={field.onChange}
            className="flex gap-4"
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}
