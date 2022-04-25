// mui
import { TextField } from '@mui/material';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const AddExerciseNameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="name"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: 'off' }}
          {...field}
          name="name"
          type="text"
          variant="outlined"
          label="name"
          fullWidth
          error={!!errors.description}
          helperText={errors.name ? errors.name?.message : ''}
        ></TextField>
      )}
    ></Controller>
  );
};
