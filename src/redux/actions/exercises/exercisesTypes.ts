export const FETCH_EXERCISES_REQUEST = 'FETCH_EXERCISES_REQUEST';
export const FETCH_EXERCISES_SUCCESS = 'FETCH_EXERCISES_SUCCESS';
export const FETCH_EXERCISES_FAILURE = 'FETCH_EXERCISES_FAILURE';

export interface Exercises {
    _id: string,
    createdBy: string,
    name: string;
  muscleGroup: string;
  description: string;
  preview: string;
  __v: string
}

interface ExercisesAsync {
    loading: boolean,
    response: Exercises[],
    error: string
}

interface FetchExercisesRequest extends ExercisesAsync {
    type: typeof FETCH_EXERCISES_REQUEST;
}

interface FetchExercisesSuccess extends ExercisesAsync {
    type: typeof FETCH_EXERCISES_SUCCESS;
}

interface FetchExercisesFailure extends ExercisesAsync {
    type: typeof FETCH_EXERCISES_FAILURE;
}

export type ExercisesActionTypes = FetchExercisesRequest | FetchExercisesFailure | FetchExercisesSuccess;