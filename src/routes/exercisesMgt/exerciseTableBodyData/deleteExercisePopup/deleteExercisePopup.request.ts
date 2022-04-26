import axiosInstance from '../../../../utils/axios/axiosInstace';
import { toast } from 'react-toastify';

export const deleteExercisePopupRequest = async (id: string) => {
  try {
    const request = await axiosInstance.delete(`/dashboard/exercises/${id}`);
    const response = await request;
    toast.success('exercise successfully deleted');
    return {
      status: response.status,
      errors: '',
    };
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 400) {
        //bad request
        toast.error('Bad request');
        return {
          status: error.response.status,
          errors: error.message,
        };
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        toast.error('Something went wrong');
        return {
          status: error.response.status,
          errors: error.message,
        };
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error('Something went wrong');
        return {
          status: error.response.status,
          errors: error.message,
        };
      }
    }
  }
};
