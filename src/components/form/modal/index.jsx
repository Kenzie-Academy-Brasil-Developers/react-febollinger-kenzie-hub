import { useContext } from "react";
import { TechContext } from "../../../contexts/techContext";
import { StyledButton } from "../../../styles/button";
import { StyledFormModal } from "./formModal";

export const FormModal = () => {
  const { register, handleSubmit, createTechnologie, errors } =
    useContext(TechContext);

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
