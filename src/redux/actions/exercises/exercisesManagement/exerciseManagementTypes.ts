export const FILTER_EXERCISES_NAME = 'FILTER_EXERCISES_NAME';
export const FILTER_EXERCISES_MUSCLEGROUP = 'FILTER_EXERCISES_MUSCLEGROUP';
export const FILTER_EXERCISES_TYPE = 'FILTER_EXERCISES_TYPE';
export const EXERCISES_ADDNEW_POPUP = 'EXERCISES_ADDNEW_POPUP';
export const EXERCISES_MODIFY_POPUP = 'EXERCISES_MODIFY_POPUP';
export const EXERCISES_DELETE_POPUP = 'EXERCISES_DELETE_POPUP';

export interface ExercisesManagement {
  name: string;
  musclegroup: string;
  exerciseType: string;
  popupOpen: boolean;
  popupDelete: {
    open: boolean;
    id: string;
    name: string;
  };
  popupModify: {
    open: boolean;
    id: string;
    name: string;
    muscleGroup: string;
    description: string;
    preview: string;
  };
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
  type: typeof EXERCISES_ADDNEW_POPUP;
}

interface ExercisesDeletePopup extends ExercisesManagement {
  type: typeof EXERCISES_DELETE_POPUP;
}

interface ExercisesModifyPopup extends ExercisesManagement {
  type: typeof EXERCISES_MODIFY_POPUP;
}

export type ExercisesManagementActionTypes =
  | FilterExercisesName
  | FilterExercisesMusclegroup
  | FilterExercisesType
  | ExercisesAddnewPopup
  | ExercisesDeletePopup
  | ExercisesModifyPopup;
