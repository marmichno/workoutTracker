// mui
import { TextField } from '@mui/material';
// react-hook-form
import { Controller, useForm, useFormContext } from 'react-hook-form';

export const RegisterPasswordRepeatInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="repeatPassword"
      defaultValue=""
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: 'off' }}
          {...field}
          name="repeatPasssword"
          label="repeat password"
          variant="outlined"
          type="password"
          fullWidth
          error={!!errors.repeatPassword}
          helperText={
            errors.repeatPassword ? errors.repeatPassword.message : ''
          }
        />
      )}
    ></Controller>
  );
};
