import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledButton } from "../../../styles/button";
import { StyledFormModal } from "../../../styles/formModal";
import { SchemaCreateTech } from "../../schemas/schemaCreateTech";

export const FormModalAdd = () => {
  const { createTechnologie } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaCreateTech),
  });

  return (
    <StyledFormModal onSubmit={handleSubmit(createTechnologie)}>
      <label htmlFor="title">
        Nome
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite um título"
          {...register("title")}
        />
      </label>
      {errors.title && <p>{errors.title?.message}</p>}

      <label htmlFor="status">
        Selecionar status
        <select name="status" id="status" {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
      </label>

      {errors.status && <p>{errors.status?.message}</p>}

      <StyledButton type="submit" buttonColor="entrar">
        Cadastrar Tecnologia
      </StyledButton>
    </StyledFormModal>
  );
};
