import * as yup from "yup"

export const SchemaProducts = yup.object().shape({
    category:yup.string().required("fill in the input"),
    price:yup.number().required("fill in the input"),
    image:yup.string().required("fill in the input")
})