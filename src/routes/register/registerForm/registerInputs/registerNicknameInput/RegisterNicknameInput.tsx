// mui
import { TextField } from '@mui/material';
// react-hook-form
import { Controller, useFormContext } from 'react-hook-form';

export const RegisterNicknameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="nickname"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          inputProps={{ autoComplete: 'off' }}
          {...field}
          name="nickname"
          variant="outlined"
          label="nickname"
          fullWidth
          error={!!errors.nickname}
          helperText={errors.nickname ? errors.nickname.message : ''}
        ></TextField>
      )}
    ></Controller>
  );
};
