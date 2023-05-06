import * as yup from "yup";

export const basicSchema = yup.object().shape({
    name: yup.string().required("Bu alan zorunlu!"),
    email: yup.string().email("Email formatında girin!").required("Bu alan zorunlu!"),
    password: yup.string().required("Bu alan zorunlu!").min(5,"En az 5 karakter girin!"),
    age: yup.number("Sayı girin!").required("Bu alan zorunlu!"),
    message: yup.string().min(3,"En az 10 karakter girin!").required("Bu alan zorunlu!")
})