import { TextField, Autocomplete } from '@mui/material';

export const ExerciseFilterMuscleGroup = () => {
  const muscleGroups = ['biceps', 'triceps', 'chest', 'quads', 'shoulders'];

  return (
    <Autocomplete
      disablePortal
      options={muscleGroups}
      sx={{ width: '200px', margin: '2em' }}
      renderInput={(params) => <TextField {...params} label="MuscleGroup" />}
    />
  );
};
