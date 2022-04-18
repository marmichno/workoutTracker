// styled
import {
  StyledRegisterFormContainer,
  StyledRegisterHeaderWrapper,
  StyledRegisterImageWrapper,
  StyledRegisterFormWrapper,
  StyledRegisterFormInputWrapper,
  StyledRegisterCaptionWrapper,
} from "./StyledRegisterForm";
// mui
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
// inputs
import { RegisterEmailInput } from "./registerInputs/registerEmailInput/RegisterEmailInput";
import { RegisterNicknameInput } from "./registerInputs/registerNicknameInput/RegisterNicknameInput";
import { RegisterPasswordInput } from "./registerInputs/registerPasswordInput/RegisterPasswordInput";
import { RegisterPasswordRepeatInput } from "./registerInputs/registerPasswordRepeatInput/RegisterPasswordRepeatInput";
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// validation schema
import { registerValidationSchema } from "./registerValidationSchema/registerValidationSchma";
// requests
import { postNewUser } from "./registerForm.requests";

interface RegisterFormInput {
  email: string;
  nickname: string;
  password: string;
  repeatPassword: string;
}

export const RegisterForm = () => {
  const methods = useForm<RegisterFormInput>({
    resolver: yupResolver(registerValidationSchema),
  });

  const registerSubmitHandler: SubmitHandler<RegisterFormInput> = async (
    data
  ) => {
    const { repeatPassword, ...transformedData } = data;
    const response = await postNewUser(transformedData);
  };

  return (
    <StyledRegisterFormContainer>
      <StyledRegisterImageWrapper>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1CF4l1ISl0svsjLVV1PyWR_9BmHBgJ2NZA&usqp=CAU" />
      </StyledRegisterImageWrapper>
      <StyledRegisterHeaderWrapper>
        <Typography variant="h2" component="h2">
          Register
        </Typography>
      </StyledRegisterHeaderWrapper>
      <FormProvider {...methods}>
        <StyledRegisterFormWrapper>
          <form
            onSubmit={methods.handleSubmit(registerSubmitHandler)}
            noValidate
            autoComplete="off"
          >
            <StyledRegisterFormInputWrapper>
              <RegisterEmailInput />
            </StyledRegisterFormInputWrapper>
            <StyledRegisterFormInputWrapper>
              <RegisterNicknameInput />
            </StyledRegisterFormInputWrapper>
            <StyledRegisterFormInputWrapper>
              <RegisterPasswordInput />
            </StyledRegisterFormInputWrapper>
            <StyledRegisterFormInputWrapper>
              <RegisterPasswordRepeatInput />
            </StyledRegisterFormInputWrapper>
            <Button variant="contained" type="submit">
              Sign in
            </Button>
          </form>
        </StyledRegisterFormWrapper>
      </FormProvider>
      <StyledRegisterCaptionWrapper>
        <Typography variant="caption" component="p">
          Already registered? Click HERE to login
        </Typography>
      </StyledRegisterCaptionWrapper>
    </StyledRegisterFormContainer>
  );
};
