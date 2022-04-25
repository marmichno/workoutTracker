import { combineReducers } from "redux";
// store
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
// reducers
import exercisesReducer from "./reducers/exercises/exercisesReducer";
import exercisesManagementReducer from "./reducers/exercises/exercisesManagement/ExerciseManagement";

export const rootReducer = combineReducers({
    exercises: exercisesReducer,
    exercisesManagement: exercisesManagementReducer
});

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;