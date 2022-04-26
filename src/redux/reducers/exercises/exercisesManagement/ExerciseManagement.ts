import {
  FILTER_EXERCISES_NAME,
  FILTER_EXERCISES_MUSCLEGROUP,
  FILTER_EXERCISES_TYPE,
  EXERCISES_ADDNEW_POPUP,
  EXERCISES_DELETE_POPUP,
  EXERCISES_MODIFY_POPUP,
} from '../../../actions/exercises/exercisesManagement/exerciseManagementTypes';
// types
import { ExercisesManagement } from '../../../actions/exercises/exercisesManagement/exerciseManagementTypes';
import { ExercisesManagementActionTypes } from '../../../actions/exercises/exercisesManagement/exerciseManagementTypes';

const initialState: ExercisesManagement = {
  name: '',
  musclegroup: '',
  exerciseType: 'all',
  popupOpen: false,
  popupDelete: {
    open: false,
    id: '',
    name: '',
  },
  popupModify: {
    open: false,
    id: '',
    name: '',
    muscleGroup: '',
    description: '',
    preview: '',
  },
};

const exercisesManagementReducer = (
  state = initialState,
  action: ExercisesManagementActionTypes
): ExercisesManagement => {
  switch (action.type) {
    case FILTER_EXERCISES_NAME:
      return {
        ...state,
        name: action.name,
      };
    case FILTER_EXERCISES_MUSCLEGROUP:
      return {
        ...state,
        musclegroup: action.musclegroup,
      };
    case FILTER_EXERCISES_TYPE:
      return {
        ...state,
        exerciseType: action.exerciseType,
      };
    case EXERCISES_ADDNEW_POPUP:
      return {
        ...state,
        popupOpen: action.popupOpen,
      };
    case EXERCISES_DELETE_POPUP:
      return {
        ...state,
        popupDelete: {
          open: action.popupDelete.open,
          id: action.popupDelete.id,
          name: action.popupDelete.name,
        },
      };
    case EXERCISES_MODIFY_POPUP:
      return {
        ...state,
        popupModify: {
          open: action.popupModify.open,
          id: action.popupModify.id,
          name: action.popupModify.name,
          muscleGroup: action.popupModify.muscleGroup,
          description: action.popupModify.description,
          preview: action.popupModify.preview,
        },
      };
    default:
      return state;
  }
};

export default exercisesManagementReducer;
