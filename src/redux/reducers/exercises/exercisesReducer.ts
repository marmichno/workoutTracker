import { FETCH_EXERCISES_SUCCESS, FETCH_EXERCISES_REQUEST, FETCH_EXERCISES_FAILURE } from "../../actions/exercises/exercisesTypes";
// types
import { Exercises } from "../../actions/exercises/exercisesTypes";
import { ExercisesActionTypes } from "../../actions/exercises/exercisesTypes";

interface ExercisesState {
    loading: boolean,
    response: Exercises[],
    error: string,
}

const initialState: ExercisesState = {
    loading: false,
    response: [],
    error: ''
}

const exercisesReducer = (state = initialState, action: ExercisesActionTypes): ExercisesState => {
    switch(action.type){
        case FETCH_EXERCISES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_EXERCISES_SUCCESS:
            return {
                loading: false,
                response: action.response,
                error: ''
            };
        case FETCH_EXERCISES_FAILURE:
            return {
                loading: false,
                response: [],
                error: action.error
            }
            default:
                return state;
    }
};

export default exercisesReducer