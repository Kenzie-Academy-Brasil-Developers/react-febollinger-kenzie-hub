import { Routes, Route } from "react-router-dom";
import { Dash } from "../pages/dashboard";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Register } from "../pages/register";

export const RoutesPage = () => (
  <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Dash />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
