// mui
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// actions
import { filterExercisesType } from '../../../../redux/actions/exercises/exercisesManagement/exerciseManagement';
// redux
import { useAppSelector } from '../../../../hooks/hooks';
import { useDispatch } from 'react-redux';

export const ExerciseFilterToggle = () => {
  const dispatch: any = useDispatch();
  const filtersState = useAppSelector((state) => state.exercisesManagement);

  const handleChange = (e: any) => {
    dispatch(filterExercisesType(e.target.value));
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={filtersState.exerciseType}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="all">all</ToggleButton>
      <ToggleButton value="created">created</ToggleButton>
      <ToggleButton value="imported">imported</ToggleButton>
    </ToggleButtonGroup>
  );
};
