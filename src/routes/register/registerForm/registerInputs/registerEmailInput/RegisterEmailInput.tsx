// mui
import { TextField } from '@mui/material';
// react-hook-form
import { useFormContext, Controller } from 'react-hook-form';

export const RegisterEmailInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="email"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: 'off' }}
          {...field}
          name="email"
          type="email"
          variant="outlined"
          label="e-mail"
          fullWidth
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
        ></TextField>
      )}
    ></Controller>
  );
};
