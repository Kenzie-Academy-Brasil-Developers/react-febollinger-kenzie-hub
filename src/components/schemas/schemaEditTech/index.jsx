import * as yup from "yup";

export const SchemaEditTech = yup.object().shape({
  status: yup.string().required("Selecione um status."),
});
