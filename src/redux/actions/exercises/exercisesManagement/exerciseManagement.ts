import { FILTER_EXERCISES_NAME, FILTER_EXERCISES_MUSCLEGROUP, FILTER_EXERCISES_TYPE, EXERCISES_ADDNEW_POPUP } from "./exerciseManagementTypes";
import { ExercisesManagementActionTypes } from "./exerciseManagementTypes";

export const filterExercisesName = (name: string): ExercisesManagementActionTypes => {
return {
    type: FILTER_EXERCISES_NAME,
    name: name,
    musclegroup: '',
    exerciseType: '',
    popupOpen: false
};
  };

  export const filterExercisesMusclegroup = (musclegroup: string): ExercisesManagementActionTypes => {
    return {
        type: FILTER_EXERCISES_MUSCLEGROUP,
        name: '',
        musclegroup: musclegroup,
        exerciseType: '',
        popupOpen: false
    };
  };

  export const filterExercisesType = (exerciseType: string): ExercisesManagementActionTypes => {
    return {
        type: FILTER_EXERCISES_TYPE,
        name: '',
        musclegroup: '',
        exerciseType: exerciseType,
        popupOpen: false
    };
  };

  export const exercisesAddnewPopup = (showAddnewPopup: boolean) : ExercisesManagementActionTypes => {
    return {
        type: EXERCISES_ADDNEW_POPUP,
        name: '',
        musclegroup: '',
        exerciseType: '',
        popupOpen: showAddnewPopup
    };
  }