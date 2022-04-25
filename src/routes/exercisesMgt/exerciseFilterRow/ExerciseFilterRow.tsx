// styled
import { StyledExerciseFilterRowContainer } from './StyledExerciseFilterRow';
// components
import { ExerciseFilterToggle } from './exerciseFilterToggle/ExerciseFilterToggle';
import { ExerciseFilterMuscleGroup } from './exerciseFilterMuscleGroup/ExerciseFilterMuscleGroup';
import { ExerciseFilterName } from './exerciseFilterName/ExerciseFilterName';

export const ExerciseFilterRow = () => {
  return (
    <StyledExerciseFilterRowContainer>
      <ExerciseFilterToggle />
      <ExerciseFilterMuscleGroup />
      <ExerciseFilterName />
    </StyledExerciseFilterRowContainer>
  );
};
