import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useSelector(selectUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
