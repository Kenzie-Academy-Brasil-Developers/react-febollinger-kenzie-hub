import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export const ProtectedRoute = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading === true) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
