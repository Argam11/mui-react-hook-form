import { useForm, FormProvider } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { RHFTextField } from "components/RHFComponents/RHFTextField";

export const Form = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <RHFTextField name="firstName" sx={{ mt: 2 }} fieldProps={{ label: "First Name", size: "small" }} />
          <RHFTextField name="email" fieldProps={{ label: "Email", size: "small" }} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};
