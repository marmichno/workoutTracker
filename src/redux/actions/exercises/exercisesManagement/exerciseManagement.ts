import {
  FILTER_EXERCISES_NAME,
  FILTER_EXERCISES_MUSCLEGROUP,
  FILTER_EXERCISES_TYPE,
  EXERCISES_ADDNEW_POPUP,
  EXERCISES_DELETE_POPUP,
  EXERCISES_MODIFY_POPUP,
} from "./exerciseManagementTypes";
import { ExercisesManagementActionTypes } from "./exerciseManagementTypes";

export const filterExercisesName = (
  name: string
): ExercisesManagementActionTypes => {
  return {
    type: FILTER_EXERCISES_NAME,
    name: name,
    musclegroup: "",
    exerciseType: "",
    popupOpen: false,
    popupDelete: {
      open: false,
      id: "",
      name: "",
    },
    popupModify: {
      open: false,
      id: "",
      name: "",
      muscleGroup: "",
      description: "",
      preview: "",
    },
  };
};

export const filterExercisesMusclegroup = (
  musclegroup: string
): ExercisesManagementActionTypes => {
  return {
    type: FILTER_EXERCISES_MUSCLEGROUP,
    name: "",
    musclegroup: musclegroup,
    exerciseType: "",
    popupOpen: false,
    popupDelete: {
      open: false,
      id: "",
      name: "",
    },
    popupModify: {
      open: false,
      id: "",
      name: "",
      muscleGroup: "",
      description: "",
      preview: "",
    },
  };
};

export const filterExercisesType = (
  exerciseType: string
): ExercisesManagementActionTypes => {
  return {
    type: FILTER_EXERCISES_TYPE,
    name: "",
    musclegroup: "",
    exerciseType: exerciseType,
    popupOpen: false,
    popupDelete: {
      open: false,
      id: "",
      name: "",
    },
    popupModify: {
      open: false,
      id: "",
      name: "",
      muscleGroup: "",
      description: "",
      preview: "",
    },
  };
};

export const exercisesAddnewPopup = (
  showAddnewPopup: boolean
): ExercisesManagementActionTypes => {
  return {
    type: EXERCISES_ADDNEW_POPUP,
    name: "",
    musclegroup: "",
    exerciseType: "",
    popupOpen: showAddnewPopup,
    popupDelete: {
      open: false,
      id: "",
      name: "",
    },
    popupModify: {
      open: false,
      id: "",
      name: "",
      muscleGroup: "",
      description: "",
      preview: "",
    },
  };
};

export const exercisesDeletePopup = (
  showDeletePopup: boolean,
  id: string,
  name: string
): ExercisesManagementActionTypes => {
  return {
    type: EXERCISES_DELETE_POPUP,
    name: "",
    musclegroup: "",
    exerciseType: "",
    popupOpen: false,
    popupDelete: {
      open: showDeletePopup,
      id: id ? id : "",
      name: name ? name : "",
    },
    popupModify: {
      open: false,
      id: "",
      name: "",
      muscleGroup: "",
      description: "",
      preview: "",
    },
  };
};

export const exercisesModifyPopup = (
  showModifyPopup: boolean,
  id: string,
  name: string,
  muscleGroup: string,
  description: string,
  preview: string
): ExercisesManagementActionTypes => {
  return {
    type: EXERCISES_MODIFY_POPUP,
    name: "",
    musclegroup: "",
    exerciseType: "",
    popupOpen: false,
    popupDelete: {
      open: false,
      id: "",
      name: "",
    },
    popupModify: {
      open: showModifyPopup,
      id: id ? id : "",
      name: name ? name : "",
      muscleGroup: muscleGroup ? muscleGroup : "",
      description: description ? description : "",
      preview: preview ? preview : "",
    },
  };
};
