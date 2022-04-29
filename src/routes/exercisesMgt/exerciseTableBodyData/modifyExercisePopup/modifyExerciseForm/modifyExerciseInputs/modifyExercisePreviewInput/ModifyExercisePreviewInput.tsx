// mui
import { TextField } from "@mui/material";
// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
// redux
import { useAppSelector } from "../../../../../../../hooks/hooks";

export const ModifyExercisePreviewInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const inputState = useAppSelector(
    (state) => state.exercisesManagement.popupModify
  );

  return (
    <Controller
      name="preview"
      defaultValue={inputState.preview}
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
