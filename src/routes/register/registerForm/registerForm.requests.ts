import axios from "axios";
import { toast } from "react-toastify";

interface User {
  email: string;
  nickname: string;
  password: string;
}

export const postNewUser = async (user: User) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const request = await axios.post(
      `http://localhost:4000/signup`,
      body,
      config
    );
    const response = request;
    toast.success("Account registered successfully");
    return {
      errors: "",
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    if (error.response.data.message) {
      toast.error(`${error.response.data.message}`);
      return {
        errors: error.response.data.message,
        status: error.response.status,
        data: {},
      };
    }
    toast.error("something went wrong");
    return {
      errors: "something went wrong",
      status: error.response.status,
      data: {},
    };
  }
};
