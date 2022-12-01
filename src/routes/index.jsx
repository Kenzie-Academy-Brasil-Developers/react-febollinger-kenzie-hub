import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dash } from "../pages/dashboard";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Register } from "../pages/register";

export const RoutesPage = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              user={user}
              setUser={setUser}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="register"
          element={<Register setLoading={setLoading} loading={loading} />}
        />
        <Route path="home" element={<Dash user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
