// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// hooks
import { useAppSelector } from "../../../../../../../hooks/hooks";

export const ModifyExerciseNameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputState = useAppSelector(
    (state) => state.exercisesManagement.popupModify
  );

  console.log(inputState.name);

  return (
    <Controller
      name="name"
      defaultValue={inputState.name}
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: "off" }}
          {...field}
          name="name"
          type="text"
          variant="outlined"
          label="name"
          fullWidth
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : ""}
        ></TextField>
      )}
    ></Controller>
  );
};
