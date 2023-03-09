import { useContext, useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useAuth } from "../Hooks/useAuth";

function AuthProtector({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/auth/login" replace />;
}
export default AuthProtector;
