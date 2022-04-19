// styled
import {
  StyledLoginFormContainer,
  StyledLoginHeaderWrapper,
  StyledLoginImageWrapper,
  StyledLoginFormWrapper,
  StyledLoginFormInputWrapper,
  StyledLoginCaptionWrapper,
} from './StyledLoginForm';
// mui
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
// inputs
import { LoginEmailInput } from './loginInputs/loginEmailInput/LoginEmailInput';
import { LoginPasswordInput } from './loginInputs/loginPasswordInput/LoginPasswordInput';
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// validation schema
import { loginValidationSchema } from './loginValidationSchema/loginValidationSchema';
// requests
import { postLoginUser } from './loginForm.requests';

interface LoginFormInput {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const methods = useForm<LoginFormInput>({
    resolver: yupResolver(loginValidationSchema),
  });

  const loginSubmitHandler: SubmitHandler<LoginFormInput> = async (data) => {
    await postLoginUser(data);
  };

  return (
    <StyledLoginFormContainer>
      <StyledLoginImageWrapper>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1CF4l1ISl0svsjLVV1PyWR_9BmHBgJ2NZA&usqp=CAU" />
      </StyledLoginImageWrapper>
      <StyledLoginHeaderWrapper>
        <Typography variant="h2" component="h2">
          Login
        </Typography>
      </StyledLoginHeaderWrapper>
      <FormProvider {...methods}>
        <StyledLoginFormWrapper>
          <form
            onSubmit={methods.handleSubmit(loginSubmitHandler)}
            noValidate
            autoComplete="off"
          >
            <StyledLoginFormInputWrapper>
              <LoginEmailInput />
            </StyledLoginFormInputWrapper>
            <StyledLoginFormInputWrapper>
              <LoginPasswordInput />
            </StyledLoginFormInputWrapper>
            <Button variant="contained" type="submit">
              Sign in
            </Button>
          </form>
        </StyledLoginFormWrapper>
      </FormProvider>
      <StyledLoginCaptionWrapper>
        <Typography variant="caption" component="p">
          Not registered yet? Click HERE to register.
        </Typography>
      </StyledLoginCaptionWrapper>
    </StyledLoginFormContainer>
  );
};
