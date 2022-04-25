import axiosInstance from '../../../../../utils/axios/axiosInstace';
import { toast } from 'react-toastify';

interface ExerciseData {
    name: string;
    muscleGroup: string;
    description: string;
    preview: string;
  }
  

export const createExercise = async (exerciseData: ExerciseData) => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify(exerciseData);

    try {
        const request = await axiosInstance.post("/dashboard/exercises", body, config)
        const response = await request;
        toast.success('new exercise added');
        return response.status;
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 409) {
                toast.error("User already exists");
                console.log(error.message);
            } else if (error.response.status === 400) {
                //bad request
                toast.error("Bad request");
                console.log(error.message);
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            toast.error("Something went wrong");
            console.log(error.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            toast.error("Something went wrong");
            console.log('Error', error.message);
        }
        return error.response.status;
    }
}