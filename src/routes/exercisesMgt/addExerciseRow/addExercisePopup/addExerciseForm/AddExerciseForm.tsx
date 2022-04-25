// styled
import {
  StyledAddNewExerciseFormContainer,
  StyledAddNewExerciseCloseWrapper,
  StyledAddNewExerciseFormWrapper,
  StyledAddNewExerciseInputWrapper,
  StyledAddNewFormWrapper,
} from './StyledExerciseForm';
// mui
import { Button } from '@mui/material';
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch } from 'react-redux';
import { exercisesAddnewPopup } from '../../../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
import { fetchExercises } from '../../../../../redux/actions/exercises/exercisesActions';
// inputs
import { AddExerciseDescriptionInput } from './addExerciseInputs/addExerciseDescriptionInput/AddExerciseDescriptionInput';
import { AddExerciseMuscleGroupInput } from './addExerciseInputs/addExerciseMuscleGroupInput/AddExerciseMuscleGroupInput';
import { AddExerciseNameInput } from './addExerciseInputs/addExerciseNameInput/AddExerciseNameInput';
import { AddExercisePreviewInput } from './addExerciseInputs/AddExercisePreviewInput/AddExercisePreviewInput';
// icons
import CloseIcon from '@mui/icons-material/Close';
// validationSchema
import { addExerciseValidationSchema } from './addExerciseSchema/addExerciseValidationSchema';
// requests
import { createExercise } from './addExerciseForm.requests';

interface AddExerciseInput {
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
}

export const AddExerciseForm = () => {
  const methods = useForm<AddExerciseInput>({
    resolver: yupResolver(addExerciseValidationSchema),
  });
  const dispatch: any = useDispatch();

  const addExerciseSubmitHandler: SubmitHandler<AddExerciseInput> = async (
    data
  ) => {
    const response = await createExercise(data);
    if (response === 201) {
      dispatch(fetchExercises());
    }
  };

  return (
    <StyledAddNewExerciseFormContainer elevation={3}>
      <StyledAddNewExerciseCloseWrapper>
        <CloseIcon onClick={() => dispatch(exercisesAddnewPopup(false))} />
      </StyledAddNewExerciseCloseWrapper>
      <StyledAddNewExerciseFormWrapper>
        <FormProvider {...methods}>
          <StyledAddNewFormWrapper>
            <form
              onSubmit={methods.handleSubmit(addExerciseSubmitHandler)}
              noValidate
              autoComplete="off"
            >
              <StyledAddNewExerciseInputWrapper>
                <AddExerciseNameInput />
              </StyledAddNewExerciseInputWrapper>
              <StyledAddNewExerciseInputWrapper>
                <AddExerciseMuscleGroupInput />
              </StyledAddNewExerciseInputWrapper>
              <StyledAddNewExerciseInputWrapper>
                <AddExerciseDescriptionInput />
              </StyledAddNewExerciseInputWrapper>
              <StyledAddNewExerciseInputWrapper>
                <AddExercisePreviewInput />
              </StyledAddNewExerciseInputWrapper>
              <Button type="submit" variant="contained">
                add new exercise
              </Button>
            </form>
          </StyledAddNewFormWrapper>
        </FormProvider>
      </StyledAddNewExerciseFormWrapper>
    </StyledAddNewExerciseFormContainer>
  );
};
