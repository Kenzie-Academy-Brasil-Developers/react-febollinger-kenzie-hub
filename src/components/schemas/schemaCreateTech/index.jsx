import * as yup from "yup";

export const SchemaCreateTech = yup.object().shape({
  title: yup
    .string()
    .required("Título obrigatório")
    .min(3, "Mínimo de 3 letras"),
  status: yup.string().required("Selecione um status."),
});
