export const FILTER_EXERCISES_NAME = 'FILTER_EXERCISES_NAME';
export const FILTER_EXERCISES_MUSCLEGROUP = 'FILTER_EXERCISES_MUSCLEGROUP';
export const FILTER_EXERCISES_TYPE = 'FILTER_EXERCISES_TYPE';
export const EXERCISES_ADDNEW_POPUP = 'EXERCISES_ADDNEW_POPUP';

export interface ExercisesManagement {
    name: string,
    musclegroup: string,
    exerciseType: string,
    popupOpen: boolean
}

interface FilterExercisesName extends ExercisesManagement {
    type: typeof FILTER_EXERCISES_NAME;
}
interface FilterExercisesMusclegroup extends ExercisesManagement {
    type: typeof FILTER_EXERCISES_MUSCLEGROUP;
}
interface FilterExercisesType extends ExercisesManagement {
    type: typeof FILTER_EXERCISES_TYPE;
}

interface ExercisesAddnewPopup extends ExercisesManagement {
    type: typeof EXERCISES_ADDNEW_POPUP
}

export type ExercisesManagementActionTypes = FilterExercisesName | FilterExercisesMusclegroup | FilterExercisesType | ExercisesAddnewPopup;