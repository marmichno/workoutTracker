import { FILTER_EXERCISES_NAME, FILTER_EXERCISES_MUSCLEGROUP, FILTER_EXERCISES_TYPE, EXERCISES_ADDNEW_POPUP } from "../../../actions/exercises/exercisesManagement/exerciseManagementTypes";
// types
import {ExercisesManagement} from '../../../actions/exercises/exercisesManagement/exerciseManagementTypes';
import { ExercisesManagementActionTypes } from "../../../actions/exercises/exercisesManagement/exerciseManagementTypes";

const initialState: ExercisesManagement = {
    name: '',
    musclegroup: '',
    exerciseType: 'all',
    popupOpen: false
}

const exercisesManagementReducer = (state = initialState, action: ExercisesManagementActionTypes): ExercisesManagement => {
    switch(action.type){
        case FILTER_EXERCISES_NAME:
            return {
                ...state,
                name: action.name
            };
        case FILTER_EXERCISES_MUSCLEGROUP:
            return {
                ...state,
                musclegroup: action.musclegroup
            };
        case FILTER_EXERCISES_TYPE:
            return {
                ...state,
                exerciseType: action.exerciseType
            }
        case EXERCISES_ADDNEW_POPUP:
            return{
                ...state,
                popupOpen: action.popupOpen
            }
            default:
                return state;
    }
};

export default exercisesManagementReducer