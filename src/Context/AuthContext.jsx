import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useUser } from "../Hooks/useUser";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { getUserInfo } = useAuth();
  const [currentUser, setCurrentUser] = useState();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const { addUser, removeUser } = useUser();

  const authLogin = (user, token) => {
    console.log("hello");
    setCurrentUser(user);
    addUser(user, token);
    nav("/recipes");
  };

  const authLogout = () => {
    removeUser();
    setCurrentUser(null);
    nav("/auth/login");
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = await getUserInfo();
      if (cuser === null) {
        localStorage.setItem("user", "");
        cuser = "";
      }

      await setCurrentUser(cuser);
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authLogin, authLogout }}>
      {!loading && <Outlet />}
    </AuthContext.Provider>
  );
};
export default AuthContext;
