// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// redux
import { useAppSelector } from "../../../../../../../hooks/hooks";

export const ModifyExerciseMuscleGroupInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputState = useAppSelector(
    (state) => state.exercisesManagement.popupModify
  );

  return (
    <Controller
      name="muscleGroup"
      defaultValue={inputState.muscleGroup}
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
