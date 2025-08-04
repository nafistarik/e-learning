import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Control, Controller } from "react-hook-form";

interface FormSwitchProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  error?: string;
}

export function FormSwitch({ label, name, control, error }: FormSwitchProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Switch
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}
