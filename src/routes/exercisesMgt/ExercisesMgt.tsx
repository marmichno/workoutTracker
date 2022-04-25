// styled
import {
  StyledExercisesMgtContainer,
  StyledExerciseTable,
  StyledExerciseTableContainer,
} from './StyledExercisesMgt';
// hooks
import { useState, useEffect } from 'react';
// redux
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { fetchExercises } from '../../redux/actions/exercises/exercisesActions';
// mui
import { CircularProgress } from '@mui/material';
// components
import { AddExerciseRow } from './addExerciseRow/AddExerciseRow';
import { ExerciseFilterRow } from './exerciseFilterRow/ExerciseFilterRow';
import { ExerciseTableHeader } from './exerciseTableHeader/ExerciseTableHeader';

interface TableRows {
  name: string;
  muscleGroup: string;
  description: string;
  preview: string;
}

export const ExercisesMgt = () => {
  const dispatch: any = useDispatch();
  const exercises = useAppSelector((state) => state.exercises);

  useEffect(() => {
    dispatch(fetchExercises());
  }, []);

  useEffect(() => {
    console.log(exercises.response);
  }, [exercises]);

  return (
    <StyledExercisesMgtContainer>
      {exercises.error && <h2>Something went wrong</h2>}
      {exercises.loading && <CircularProgress />}
      {exercises.response && (
        <>
          <AddExerciseRow />
          <ExerciseFilterRow />
          <StyledExerciseTableContainer>
            <StyledExerciseTable>
              {exercises.response.length > 0 && (
                <ExerciseTableHeader tableRows={exercises.response} />
              )}
            </StyledExerciseTable>
          </StyledExerciseTableContainer>
        </>
      )}
    </StyledExercisesMgtContainer>
  );
};
