// mui
import { TextField } from "@mui/material";
// react-hook-form
import { Controller, useFormContext } from "react-hook-form";

export const LoginPasswordInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="password"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: "off" }}
          {...field}
          name="password"
          variant="outlined"
          label="password"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        ></TextField>
      )}
    ></Controller>
  );
};
