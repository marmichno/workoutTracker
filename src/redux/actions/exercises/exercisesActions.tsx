import axios from "axios";
import axiosInstance from "../../../utils/axios/axiosInstace";
// actions
import {
  FETCH_EXERCISES_FAILURE,
  FETCH_EXERCISES_SUCCESS,
  FETCH_EXERCISES_REQUEST,
} from "./exercisesTypes";
// types
import { Dispatch } from "redux";
import { ExercisesActionTypes } from "./exercisesTypes";
import { Exercises } from "./exercisesTypes";

const fetchExercisesRequest = (): ExercisesActionTypes => {
  return {
    type: FETCH_EXERCISES_REQUEST,
    loading: true,
    response: [],
    error: "",
  };
};

const fetchExercisesSuccess = (response: Exercises[]): ExercisesActionTypes => {
  return {
    type: FETCH_EXERCISES_SUCCESS,
    loading: false,
    response: response,
    error: "",
  };
};

const fetchExercisesFailure = (error: string): ExercisesActionTypes => {
  return {
    type: FETCH_EXERCISES_FAILURE,
    loading: false,
    response: [],
    error: error,
  };
};

export const fetchExercises = () => {
  return async (dispatch: Dispatch<ExercisesActionTypes>) => {
    dispatch(fetchExercisesRequest());
    try {
      const request = await axiosInstance.get("/dashboard/exercises");
      const response = request.data.data;
      dispatch(fetchExercisesSuccess(response));
    } catch (error: any) {
      console.log(error);
      dispatch(fetchExercisesFailure("string"));
    }
  };
};
