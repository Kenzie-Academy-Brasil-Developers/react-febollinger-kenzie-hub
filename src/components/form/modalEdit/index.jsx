import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { TechContext } from "../../../contexts/techContext";

import { StyledButton } from "../../../styles/button";
import { StyledFormModal } from "../../../styles/formModal";
import { SchemaEditTech } from "../../schemas/schemaEditTech";
// import { UserContext } from "../../../contexts/userContext";

export const FormModalEdit = ({ select }) => {
  const { editTech, dltTech } = useContext(TechContext);
  // const { userTech } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SchemaEditTech),
  });

  return (
    <StyledFormModal
      onSubmit={() => {
        handleSubmit(editTech);
      }}
    >
      <label>
        Nome
        <input value={select.title} disabled />
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
