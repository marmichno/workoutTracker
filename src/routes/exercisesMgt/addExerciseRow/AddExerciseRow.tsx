import { AddNewExerciseRowContainer } from './AddExerciseRow.styled';
// mui
import { Typography, Button } from '@mui/material';
// components
import { AddNewExercisePopup } from './addExercisePopup/AddNewExercisePopup';
// actions
import { exercisesAddnewPopup } from '../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
// redux
import { useAppSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux';

export const AddExerciseRow = () => {
  const dispatch: any = useDispatch();
  const popupState = useAppSelector((state) => state.exercisesManagement);

  return (
    <>
      <AddNewExerciseRowContainer>
        <Typography variant="h6" component="h6">
          Create new exercise
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch(exercisesAddnewPopup(true))}
        >
          add new
        </Button>
      </AddNewExerciseRowContainer>
      {popupState.popupOpen && <AddNewExercisePopup />}
    </>
  );
};
