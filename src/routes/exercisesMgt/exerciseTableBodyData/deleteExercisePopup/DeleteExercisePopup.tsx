// styled
import {
  StyledDeleteExercisePopupContainer,
  StyledDeleteExercisePopupWrapper,
  StyledDeleteExerciseButtonWrapper,
} from './StyledDeleteExercisePopup';
// redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../hooks/hooks';
// mui
import { Typography, Button } from '@mui/material';
// actions
import { exercisesDeletePopup } from '../../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
import { fetchExercises } from '../../../../redux/actions/exercises/exercisesActions';
// requests
import { deleteExercisePopupRequest } from './deleteExercisePopup.request';

export const DeleteExercisePopup = () => {
  const dispatch: any = useDispatch();
  const exercisesManagementState = useAppSelector(
    (state) => state.exercisesManagement
  );

  const deleteExercise = async () => {
    const response = await deleteExercisePopupRequest(
      exercisesManagementState.popupDelete.id
    );
    if (!response?.errors) {
      dispatch(exercisesDeletePopup(false, '', ''));
      dispatch(fetchExercises());
    }
  };

  return (
    <StyledDeleteExercisePopupContainer>
      <StyledDeleteExercisePopupWrapper>
        <Typography component="h4" variant="h4">
          {`Are you sure want to delete exercise ${exercisesManagementState.popupDelete.name}?`}
        </Typography>
        <StyledDeleteExerciseButtonWrapper>
          <Button variant="contained" onClick={() => deleteExercise()}>
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(exercisesDeletePopup(false, '', ''))}
          >
            No
          </Button>
        </StyledDeleteExerciseButtonWrapper>
      </StyledDeleteExercisePopupWrapper>
    </StyledDeleteExercisePopupContainer>
  );
};
