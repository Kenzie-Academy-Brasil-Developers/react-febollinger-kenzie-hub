import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { TechContext } from "../../../contexts/techContext";

import { StyledButton } from "../../../styles/button";
import { StyledFormModal } from "../../../styles/formModal";
import { SchemaEditTech } from "../../schemas/schemaEditTech";
import { UserContext } from "../../../contexts/userContext";

export const FormModalEdit = () => {
  const { dltTech, editTech } = useContext(TechContext);
  const { select, selectEdit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaEditTech),
  });

  const submitEdit = (date) => {
    editTech(date, select);
  };

  return (
    <StyledFormModal onSubmit={handleSubmit(submitEdit)}>
      <label>
        Nome
        <input value={selectEdit} disabled />
      </label>

      <label htmlFor="status">
        Selecionar status
        <select name="status" id="status" {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
      </label>

      {errors.status && <p>{errors.status?.message}</p>}

      <div className="divBtn">
        <StyledButton type="submit" buttonColor="entrar" size="btnEdt">
          Salvar alterações
        </StyledButton>
        <StyledButton
          type="button"
          buttonColor="cadastrar"
          size="btnDlt"
          onClick={() => {
            dltTech(select);
          }}
        >
          Excluir
        </StyledButton>
      </div>
    </StyledFormModal>
  );
};
