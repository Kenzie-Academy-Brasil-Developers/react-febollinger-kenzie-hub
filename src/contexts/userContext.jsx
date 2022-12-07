import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Api } from "../services";
import { schemaLogin } from "../components/schemas/schemaLogin";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userProfile = async () => {
      const token = localStorage.getItem("@userToken");

      try {
        const results = await Api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(results.data);
        console.log(results.data);
      } catch (error) {
        console.log(error);
        if (error) {
          localStorage.removeItem("@userToken");
          localStorage.removeItem("@userId");
        }
      }
    };
    userProfile();
  }, []);

  const loginUser = async (formDate) => {
    try {
      setLoading(true);

      const result = await Api.post("/sessions", formDate);

      const { token, user: responseUser } = result.data;

      window.localStorage.setItem("@userToken", token);
      window.localStorage.setItem("@userId", responseUser.id);

      setUser(responseUser);

      toast.success("Login realizado com sucesso");

      navigate("/home");
    } catch (error) {
      toast.error(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (date) => {
    loginUser(date);

    reset();
  };

  return (
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        handleLogin,
        loading,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
