import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";

export const RHFTextField = ({ fieldProps, ...props }: any) => {
  const { control } = useFormContext();
  return (
    <Controller
      {...props}
      control={control}
      render={({ field }) => {
        return <TextField variant="outlined" {...field} {...fieldProps} />;
      }}
    />
  );
};
