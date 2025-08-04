import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller, Control } from "react-hook-form";

interface FormFileUploadProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label: string;
  accept?: string;
  error?: string;
}

export function FormFileUpload({
  name,
  control,
  label,
  accept,
  error,
}: FormFileUploadProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            accept={accept}
            onChange={(e) => field.onChange(e.target.files?.[0])}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
