import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    nickname: yup.string().min(4, 'Must be at least 4 symbols long').max(15, 'Must be 15 symbols or less').required(),
    password: yup.string().matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.\,])/g,
        "Must contain one uppercase, one lowercase, one number and One Special Case Character").required(),
    repeatPassword: yup.string().required().test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
    }),
})