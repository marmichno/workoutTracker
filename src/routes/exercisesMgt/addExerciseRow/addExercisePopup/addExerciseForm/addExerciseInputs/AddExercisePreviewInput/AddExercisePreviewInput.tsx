// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";

export const AddExercisePreviewInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="preview"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: "off" }}
          {...field}
          name="preview"
          type="text"
          variant="outlined"
          label="preview"
          fullWidth
          error={!!errors.preview}
          helperText={errors.preview ? errors.preview?.message : ""}
        ></TextField>
      )}
    ></Controller>
  );
};
