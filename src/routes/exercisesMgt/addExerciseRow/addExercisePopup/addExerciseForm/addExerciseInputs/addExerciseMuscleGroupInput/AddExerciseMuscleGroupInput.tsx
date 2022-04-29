// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";

export const AddExerciseMuscleGroupInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="muscleGroup"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: "off" }}
          {...field}
          name="muscleGroup"
          type="text"
          variant="outlined"
          label="muscle group"
          fullWidth
          error={!!errors.muscleGroup}
          helperText={errors.muscleGroup ? errors.muscleGroup?.message : ""}
        ></TextField>
      )}
    ></Controller>
  );
};
