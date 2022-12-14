import { createContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Api } from "../services";
import { schemaLogin } from "../components/schemas/schemaLogin";
import { schemaRegister } from "../components/schemas/schemaRegister";
// import { useContext } from "react";
// import { TechContext } from "./techContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userTech, setUserTech] = useState([]);
  const [select, setSelect] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  // const { tech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin, schemaRegister),
  });

  useEffect(() => {
    const userProfile = async () => {
      const token = localStorage.getItem("@userToken");

      if (!token) {
        setLoading(loading);
        return;
      }

      try {
        const results = await Api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(results.data);

        setUserTech(results.data.techs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(loading);
      }
    };
    userProfile();
  }, [loading]);

  const loginUser = async (formDate) => {
    try {
      setLoading(true);

      const result = await Api.post("/sessions", formDate);

      localStorage.setItem("@userToken", result.data.token);
      localStorage.setItem("@userId", result.data.user.id);

      setUser(result.data.user);

      toast.success("Login realizado com sucesso");

      const goTo = location.state?.from?.pathname || "/home";
      navigate(goTo, { replace: true });
    } catch (error) {
      toast.error(error.response);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (formData) => {
    try {
      setLoading(true);

      const response = await Api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");

      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        registerUser,
        loginUser,
        loading,
        user,
        setUser,
        userTech,
        setUserTech,
        select,
        setSelect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
