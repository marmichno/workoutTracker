import * as yup from "yup";

export const modifyExerciseValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Must be at least 4 symbols long")
    .max(30, "Must be 30 symbols or less"),
  muscleGroup: yup.string(),
  description: yup.string().max(300, "Must be 300 symbols or less"),
  preview: yup.string().max(100, "Must be 100 symbols or less"),
});
