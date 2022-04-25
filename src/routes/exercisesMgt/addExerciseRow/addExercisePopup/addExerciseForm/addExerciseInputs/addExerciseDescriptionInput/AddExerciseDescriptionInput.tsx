// mui
import { TextField } from '@mui/material';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const AddExerciseDescriptionInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="description"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: 'off' }}
          {...field}
          name="description"
          type="text"
          variant="outlined"
          label="description"
          multiline
          maxRows={4}
          fullWidth
          error={!!errors.description}
          helperText={errors.description ? errors.description?.message : ''}
        ></TextField>
      )}
    ></Controller>
  );
};
