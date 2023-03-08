import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

function AuthProtector({ children }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/auth/login" replace />;
}
export default AuthProtector;
