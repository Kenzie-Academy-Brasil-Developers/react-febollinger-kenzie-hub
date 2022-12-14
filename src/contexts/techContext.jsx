import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

import { Api } from "../services";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDlt, setShowModalDlt] = useState(false);

  const token = localStorage.getItem("@userToken");

  const { userTech, setUserTech } = useContext(UserContext);

  const createTechnologie = async (date) => {
    try {
      const token = localStorage.getItem("@userToken");

      const result = await Api.post("/users/techs", date, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (result.data) {
        setShowModalAdd(!showModalAdd);

        setUserTech([...userTech, result.data]);

        toast.success("Tecnologia cadastrada");
      }
    } catch (error) {
      toast.error(error.message);
      if (error) {
        setShowModalAdd(!showModalAdd);
      }
    }
  };

  const editTech = async (body) => {
    try {
      const result = await Api.put(`/users/techs/`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia atualizada");
      if (result.data) {
        setShowModalDlt(!showModalDlt);
      }
    } catch (error) {
      toast.error("Tente novamente.");
    }
  };

  const dltTech = async (id) => {
    try {
      const result = await Api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (result) {
        setShowModalDlt(!showModalDlt);

        const findingId = userTech.filter((techId) => techId.id !== id);

        setUserTech(findingId);

        toast.success(`Tecnologia deletada com sucesso!`);
      }
    } catch (error) {
      toast.error("Não foi possivel deletar, tente novamente");

      if (error) {
        setShowModalDlt(!showModalDlt);
      }
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTechnologie,
        showModalAdd,
        setShowModalAdd,
        showModalDlt,
        setShowModalDlt,
        setTech,
        editTech,
        dltTech,
        tech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
