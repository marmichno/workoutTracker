// styled
import {
  StyledModifyExerciseFormContainer,
  StyledModifyExerciseCloseWrapper,
  StyledModifyExerciseFormWrapper,
  StyledModifyExerciseInputWrapper,
  StyledModifyFormWrapper,
} from './StyledModifyExerciseForm';
// mui
import { Button } from '@mui/material';
// react-hook-form
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch } from 'react-redux';
import { exercisesModifyPopup } from '../../../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
import { fetchExercises } from '../../../../../redux/actions/exercises/exercisesActions';
// inputs
// icons
import CloseIcon from '@mui/icons-material/Close';
// validationSchema
// requests

interface ModifyExerciseInput {
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
}

export const ModifyExerciseForm = () => {
  const methods = useForm<ModifyExerciseInput>();
  const dispatch: any = useDispatch();

  const modifyExerciseSubmitHandler: SubmitHandler<
    ModifyExerciseInput
  > = async (data) => {
    console.log(data);
  };

  return (
    <StyledModifyExerciseFormContainer elevation={3}>
      <StyledModifyExerciseCloseWrapper>
        <CloseIcon
          onClick={() =>
            dispatch(exercisesModifyPopup(false, '', '', '', '', ''))
          }
        />
      </StyledModifyExerciseCloseWrapper>
      <StyledModifyExerciseFormWrapper>
        <FormProvider {...methods}>
          <StyledModifyFormWrapper>
            <form
              onSubmit={methods.handleSubmit(modifyExerciseSubmitHandler)}
              noValidate
              autoComplete="off"
            >
              <StyledModifyExerciseInputWrapper>
                {/* <AddExerciseNameInput /> */}
              </StyledModifyExerciseInputWrapper>
              <StyledModifyExerciseInputWrapper>
                {/* <AddExerciseMuscleGroupInput /> */}
              </StyledModifyExerciseInputWrapper>
              <StyledModifyExerciseInputWrapper>
                {/* <AddExerciseDescriptionInput /> */}
              </StyledModifyExerciseInputWrapper>
              <StyledModifyExerciseInputWrapper>
                {/* <AddExercisePreviewInput /> */}
              </StyledModifyExerciseInputWrapper>
              <Button type="submit" variant="contained">
                modify exercise
              </Button>
            </form>
          </StyledModifyFormWrapper>
        </FormProvider>
      </StyledModifyExerciseFormWrapper>
    </StyledModifyExerciseFormContainer>
  );
};
