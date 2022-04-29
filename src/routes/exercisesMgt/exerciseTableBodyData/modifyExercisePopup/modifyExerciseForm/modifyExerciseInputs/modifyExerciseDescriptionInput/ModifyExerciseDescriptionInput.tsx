// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// redux
import { useAppSelector } from "../../../../../../../hooks/hooks";

export const ModifyExerciseDescriptionInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputState = useAppSelector(
    (state) => state.exercisesManagement.popupModify
  );

  return (
    <Controller
      name="description"
      defaultValue={inputState.description}
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: "off" }}
          {...field}
          name="description"
          type="text"
          variant="outlined"
          label="description"
          multiline
          maxRows={4}
          fullWidth
          error={!!errors.description}
          helperText={errors.description ? errors.description?.message : ""}
        ></TextField>
      )}
    ></Controller>
  );
};
