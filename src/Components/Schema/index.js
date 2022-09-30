import * as Yup from "yup";

export const signUpSchema = Yup.object({
    firstname:Yup.string()
    .min(4)
    .max(8)
    .required("Required*"),
    lastname:Yup.string()
    .min(4)
    .max(8)
    .required("Required*"),
    email:Yup.string()
    .email("Invalid email")
    .required("Please enter your valid email"),
    password:Yup.string()
    .min(8)
    .required("Please enter your valid password"),
    confirm_password:Yup.string()
    .min(8)
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password should be same as password"),
    address:Yup.string()
    .required("Please enter your valid address"),
    mobile:Yup.number().min(10).required("Please enter your valid phone number"),
    iso:Yup.number().required("Requried*")
})