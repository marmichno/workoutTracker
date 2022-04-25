// styled
import { StyledAddNewExercisePopupContainer } from './StyledAddNewExercisePopup';
// components
import { AddExerciseForm } from './addExerciseForm/AddExerciseForm';

export const AddNewExercisePopup = () => {
  return (
    <StyledAddNewExercisePopupContainer>
      <AddExerciseForm />
    </StyledAddNewExercisePopupContainer>
  );
};
