import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { SchemaCreateTech } from "../components/schemas/schemaCreateTech";
import { Api } from "../services";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaCreateTech),
  });

  const createTechnologie = async (date) => {
    try {
      const token = localStorage.getItem("@userToken");

      const result = await Api.post("/users/techs", date, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      window.localStorage.setItem("@userToken", token);
      window.localStorage.setItem("@userId", result.data.id);

      setTech([...tech, result.data]);

      toast.success("Tecnologia cadastrada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        createTechnologie,
        showModal,
        setShowModal,
        tech,
        setTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
