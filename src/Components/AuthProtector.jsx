import { Navigate } from "react-router-dom";

function AuthProtector({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/auth/login" replace />;
}
export default AuthProtector;
